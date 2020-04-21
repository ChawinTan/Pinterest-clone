import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from "@material-ui/core/IconButton";
import ContactsIcon from '@material-ui/icons/Contacts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';

import Login from '../Login/login';

const styles = {
    searchInput: {
        padding: '0.1rem 0.3rem',
        fontSize: '0.8rem'
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
      },
      title: {
        flexGrow: 1,
        letterSpacing: 3,
        fontFamily: "Comic Sans MS",
        fontWeight: 600
      },
      icon: {
          color: "#ffffff"
      },
      loginText: {
        color: "#ffffff",
        marginRight: theme.spacing(2),
        fontFamily: "Comic Sans MS",
      },
      userText: {
          color: "#ffffff",
          fontFamily: "Comic Sans MS",
          paddingLeft: '2rem'
      }
}));

function Navbar(props) {
    const classes = useStyles();

    const { loginState, userState, checkLogout, removeUser, enterSearch, userSearch } = props;

    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const handleLoginDialogOpen = () => {
        setOpen(true);
    }

    const handleLoginDialogClose = () => {
        setOpen(false);
    }

    const handleEnterSearch = () => {
        const url = 'https://localhost:8081/search/';
        fetch(url, {
            method: 'post',
            headers: { 
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ searchTerm: search })
        }).then(res => res.json())
        .then(json => {
            userSearch(json);
            enterSearch(true);
        })
    }

    const handleSearchInput = (e) => {
        setSearch(e.target.value);
    }

    const handleLogout = () => {
        const url = 'https://localhost:8081/user/logout';
        
        fetch(url, {
            method: 'get',
            headers: { 
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(json => {
            if (json.logout) {
                checkLogout(false);
                removeUser();
            } else {
                alert('something went wrong when login out');
            }
        })
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: "#c8232c" }}>
                <Toolbar>
                    <Typography variant="h6" align="left" className={classes.title}>
                        Simple Pinterest
                    </Typography>
                    {
                        loginState ?
                        <React.Fragment>
                            <input onChange={handleSearchInput} style={styles.searchInput} placeholder="Type to search" />
                            <Tooltip title="Search">
                                <IconButton aria-label="search" onClick={handleEnterSearch}>
                                    <SearchIcon className={classes.icon} />
                                </IconButton>
                            </Tooltip>
                            <Typography className={classes.userText}>Welcome {userState.name}</Typography>
                        </React.Fragment>
                        :
                        <IconButton onClick={handleLoginDialogOpen}>
                            <Typography className={classes.loginText}>Login</Typography>
                            <ContactsIcon className={classes.icon} />
                        </IconButton>
                    }
                    {
                        loginState ?
                        <Tooltip title="Logout">
                            <IconButton aria-label="logout" onClick={handleLogout}>
                                <ExitToAppIcon className={classes.icon} />
                            </IconButton>
                        </Tooltip>
                        :
                        null
                    }
                </Toolbar>
            </AppBar>
            <Login open={open} onClose={handleLoginDialogClose} />
        </div>
    );
}

export default Navbar;