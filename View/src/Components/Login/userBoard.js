import React, { useState, useImperativeHandle } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const styles = {
    root: {
        padding: '1rem',
    },
    description: {
        fontFamily: "Comic Sans MS",
        fontWeight: 600,
        color: '#808080'
    },
    input: {
        padding: '0.2rem',
        width: '150px'
    },
    likePhotoHeading: {
        backgroundColor: '#c8232c',
        padding: '1rem',
        margin: '2rem 0',
        textAlign: 'center',
        fontFamily: "Comic Sans MS",
        fontWeight: 600,
        fontSize: '1.5rem',
        color: '#FFFFFF'
    }
}

const useStyle = makeStyles(() => ({
    cardMedia: {
        height: '250px'
    },
    deleteIcon: {
        color: '#ff4d4d',
    },
    checkIcon: {
        color: '#00b33c',
        marginLeft: '1rem'
    }
}));

function UserBoard(props)  {
    const classes = useStyle();
    const { userId, photos, mappedPhotos } = props;

    const [photoCopy, setPhotoCopy] = useState([]);
    const handleDescChange = (e, index) => {
        const updatePhoto = photoCopy.length === 0 ? [...photos] : [...photoCopy];

        for (let i=0; i < photos.length; i++) {
            if (i === index) {
                updatePhoto[i] = { ... updatePhoto[i], description: e.target.value };
            }
        }
        setPhotoCopy(updatePhoto);
    }

    const handleDescClick = (index) => {
        const description = photoCopy[index].description;
        const id = photoCopy[index].id;
        const url = `https://localhost:8081/photo/update/${id}`;

        fetch(url, {
            method: 'post',
            headers: { 
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description })
        }).then(res => res.json())
        .then(json => {
            if (json) {
                console.log(json.status);
            }
        })
    }

    return (
        <div style={styles.root}>
            <Grid container spacing={3}>
                {
                    photos.map((photo, id) => {
                        return (
                            <Grid key={id} item xs={3}>
                                <Card>
                                    <CardMedia
                                    className={classes.cardMedia}
                                    title='User picture'
                                    image={photo.link}
                                    component="img"
                                     />
                                    <CardContent>
                                        { 
                                            userId === photo.user_id && photo.description ?
                                            <span style={styles.description}>{photo.description}</span>
                                            :
                                            userId === photo.user_id && !photo.description ?
                                            <input 
                                            name={`desc-${ id }`} 
                                            style={styles.input} 
                                            onChange={(e) => {handleDescChange(e, id)}}
                                            placeholder="Enter short description" />
                                            :
                                            null

                                        }
                                        { userId === photo.user_id && !photo.description ? <IconButton className={classes.checkIcon} onClick={() => {handleDescClick(id)}}><CheckCircleIcon/></IconButton> : null }
                                        { userId === photo.user_id ? <IconButton className={classes.deleteIcon} ><DeleteForeverIcon/></IconButton> : null }
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>

            <div style={styles.likePhotoHeading}>
                Liked Photos
            </div>
            
            <Grid container spacing={3}>
                {  
                    mappedPhotos && mappedPhotos.length > 0 ? 
                    mappedPhotos.map((photo, id) => {
                        return (
                            <Grid key={id} item xs={3}>
                                <Card>
                                    <CardMedia
                                    className={classes.cardMedia}
                                    title='User picture'
                                    image={photo.link}
                                    component="img"
                                     />
                                    <CardContent>   
                                        <span style={styles.description}>{photo.description}</span>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                    :
                    <div></div>
                }
            </Grid>    
        </div>
    )
}

export default UserBoard;
