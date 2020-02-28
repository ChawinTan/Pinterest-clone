import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ContactsIcon from '@material-ui/icons/Contacts';

import Login from '../Login/login';

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
      loginIcon: {
          color: "#ffffff"
      },
      loginText: {
        color: "#ffffff",
        marginRight: theme.spacing(2),
        fontFamily: "Comic Sans MS",
      },
      userText: {
          color: "#ffffff",
          fontFamily: "Comic Sans MS"
      }
}));

function Navbar(props) {
    const classes = useStyles();

    const { loginState } = props;

    const [open, setOpen] = useState(false);
    const handleLoginDialogOpen = () => {
        setOpen(true);
    }
    const handleLoginDialogClose = () => {
        setOpen(false);
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
                        <Typography className={classes.userText}>Welcome user</Typography>
                        :
                        <IconButton onClick={handleLoginDialogOpen}>
                            <Typography className={classes.loginText}>Login</Typography>
                            <ContactsIcon className={classes.loginIcon} />
                        </IconButton>
                    }
                </Toolbar>
            </AppBar>
            <Login open={open} onClose={handleLoginDialogClose} />
        </div>
    );
}

export default Navbar;