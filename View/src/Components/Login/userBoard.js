import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    root: {
        padding: '1rem',
    }
}

const useStyle = makeStyles(() => ({
    cardMedia: {
        height: '250px'
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
                        console.log(photo.link)
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
                                        Coming soon
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
