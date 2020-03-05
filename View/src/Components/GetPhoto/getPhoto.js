import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        padding: '1rem',
        fontFamily: "Comic Sans MS",
    },
    span: {
        marginLeft: '1rem'
    }
}

const useStyles = makeStyles(theme  => ({
    paper: {
        padding: '0.5rem',
        backgroundColor: '#e9e9e9',
        opacity: 0.8,
        boxShadow: '0 0 10px 0 rgb(72, 94, 116, 0.3)'
    },
    button: {
        backgroundColor: "#c8232c",
        color: '#ffffff',
        fontFamily: "Comic Sans MS",
        fontWeight: 600
    }
}))

const fetchPhoto = (userId) => {
    fetch('https://localhost:8081/user/tokens', {
        method: 'get',
        headers: { 
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
    }).then(res => res.json())
    .then(json => json.accessToken)
    .then(token => {
        fetch(`https://graph.facebook.com/${userId}/photos?access_token=${token}`, {
            method: 'get',
            headers: { 
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
        }).then(res => res.json())
        .then(json => console.log(json))
    })
}

function GetPhoto(props) {
    const classes = useStyles();
    const { getPhoto, userId } =  props;

    return (
        <div style={styles.root}>
            <Paper className={classes.paper}>
                <Button className={classes.button} onClick={() => {fetchPhoto(userId)}}>{ getPhoto === 0 ? 'Get Photos' : 'Update Photos' }</Button>
                <span style={styles.span}>{ getPhoto === 0 ? 'Click to import photos from your facebook' : 'Click to import new photos'}</span>
            </Paper>
        </div>
    )
}

export default GetPhoto;
