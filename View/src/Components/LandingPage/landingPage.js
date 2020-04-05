import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = {
    root: {
        padding: '1rem',
        fontFamily: "Comic Sans MS",
    },
    span2: {
        marginLeft: '2rem'
    }
}

const useStyles = makeStyles(theme  => ({
    paper: {
        margin: '1.5rem 0',
        padding: '0.8rem',
        backgroundColor: '#e9e9e9',
        opacity: 0.8,
        boxShadow: '0 0 10px 0 rgb(72, 94, 116, 0.3)',
        fontSize: '1.2rem',
        fontWeight: '600'
    },
}))

const detailStore = (details) => {
    const keys = Object.keys(details);

    return keys.map(key => {
        return { ...details[key], secret: key };
    })
}

function LandingPage() {
    const classes = useStyles()
    const  [details, setDetails] = useState([]);

    useEffect(() => {
        const url = `https://localhost:8081/landing/user-details`;

        fetch(url, {
            method: 'get',
            headers: { 
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res =>res.json())
        .then(json => {
            setDetails([...detailStore(json)]);
        })

    }, [])

    return (
        <div style={styles.root}>
            {
                details.map((detail, index) => {
                    return (
                        <Paper className={classes.paper} key={index}>
                            <span>Name: {detail.name}</span> 
                            <span style={styles.span2}>Number of pictures: {detail.picNum}</span>
                        </Paper>
                    )
                })
            }
        </div>
    )
}

export default LandingPage;
