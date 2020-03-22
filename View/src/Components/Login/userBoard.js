import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';

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
        width: '200px'
    }
}

const useStyle = makeStyles(() => ({
    cardMedia: {
        height: '250px'
    },
    deleteIcon: {
        color: '#ff4d4d',
    }
}));

function UserBoard(props)  {
    const classes = useStyle();
    const { userId, photos } = props;

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
                                            <input style={styles.input} placeholder="Enter short description" />
                                            :
                                            null

                                        }
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
