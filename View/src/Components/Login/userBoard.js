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
    const { userId, photos } = props;

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
        console.log(photoCopy);
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
                                        { userId === photo.user_id ? <IconButton className={classes.checkIcon} onClick={handleDescClick}><CheckCircleIcon/></IconButton> : null }
                                        { userId === photo.user_id ? <IconButton className={classes.deleteIcon} ><DeleteForeverIcon/></IconButton> : null }
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default UserBoard;
