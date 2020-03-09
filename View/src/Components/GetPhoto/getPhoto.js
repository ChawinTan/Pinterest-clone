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


function GetPhoto(props) {
    const classes = useStyles();
    const { userId } =  props;

    return (
        <div style={styles.root}>
            <Paper className={classes.paper}>
                <Button className={classes.button} >Add Photo</Button>
                <span style={styles.span}>Click to add photos</span>
                <span style={styles.span}><input style={styles.input} placeholder="Enter photo link"/></span>
            </Paper>
        </div>
    )
}

export default GetPhoto;
