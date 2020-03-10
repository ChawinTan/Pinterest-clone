import React, { useState } from "react";
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
    },
    input: {
        padding: '0.3rem',
        fontSize: '0.8rem',
        width: '300px'
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

const addPhoto = (link, userId, setLink, event) => {
    event.preventDefault();
    const url = `https://localhost:8081/photo/add/${userId}`;
    fetch(url, {
        method: 'post',
        headers: { 
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ link })
    }).then(res => res.json())
    .then(json => {
        if (json.status === 'added') {
            setLink('');
        }
    }).catch(err => {
        alert(err);
    })
}


function GetPhoto(props) {
    const classes = useStyles();
    const { userId } =  props;

    const [link, setLink] = useState('');
    const handleLink = (event) => {
        setLink(event.target.value);
    }

    return (
        <div style={styles.root}>
            <Paper className={classes.paper}>
                <Button className={classes.button} onClick={(event) => {addPhoto(link, userId, setLink, event)}} >Add Photo</Button>
                <span style={styles.span}>Click to add photos</span>
                <span style={styles.span}><input style={styles.input} onChange={handleLink} placeholder="Enter photo link" value={link}/></span>
            </Paper>
        </div>
    )
}

export default GetPhoto;
