import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from "@material-ui/core/IconButton";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = {
    root: {
        fontFamily: "Comic Sans MS",
    },
    heading: {
        fontSize: '1.5rem',
        fontWeight: 600,
        padding: '0.5rem',
        backgroundColor: '#e9e9e9',
        opacity: 0.8,
        boxShadow: '0 0 10px 0 rgb(72, 94, 116, 0.3)',
        margin: '1rem auto',
        width: '60%',
        textAlign: 'center'
    },
    searchItem: {
        backgroundColor: '#c8232c',
        margin: '1rem auto',
        width: '60%',
        textAlign: 'center',
        fontSize: '1.2rem',
        fontWeight: 600,
        color: "#ffffff",
        padding: '0.5rem',
        borderRadius: '5px'
    },
    result: {
        margin: '1rem auto',
        width: '60%',
        textAlign: 'center'
    }
}

const useStyle = makeStyles(() => ({
    cardMedia: {
        height: '250px',
    },
    favouriteIcon: {
        color: '#ff1a1a'
    }
}));

function Search(props) {
    const classes = useStyle();
    const { exitSearch, searchItems } = props;
    const [ results, setResults ] = useState([]);

    const handleExitSearch = () => {
        exitSearch(false);
    }

    const handleSearchClick = (index) => {
        const item = searchItems[index];
        const url = 'https://localhost:8081/search/select';

        fetch(url, {
            method: 'post',
            headers: { 
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: item.secret })
        }).then(res =>  res.json())
        .then((json => {
            console.log(json)
            setResults(json);
        }))
    }

    return (
        <div style={styles.root}>
            <div style={styles.heading} >
                Search results
                <Tooltip title="Exit">
                    <IconButton aria-label="exit" onClick={handleExitSearch} >
                        <ExitToAppIcon />
                    </IconButton>
                </Tooltip>
            </div>

            <div>
                {
                    searchItems.map((item, index) => {
                        return (
                            <div style={styles.searchItem} key={index} onClick={() => { handleSearchClick(index) }}>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>

            <div style={styles.result}>
                {
                    results.length > 0 ? 
                    <Grid container spacing={3}>
                        {
                            results.map((item, id) => {
                                console.log(item.link)
                                return (
                                    <Grid key={id} item xs={3}>
                                        <Card>
                                            <CardMedia
                                            className={classes.cardMedia}
                                            title='User picture'
                                            image={item.link}
                                            component="img"
                                            />
                                            <CardContent>
                                                <IconButton>
                                                    <FavoriteIcon className={classes.favouriteIcon} />
                                                </IconButton>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    :
                    <div style={styles.result}>Select user to see their photos!</div>
                }
            </div>
        </div>
    )
}

export default Search;
