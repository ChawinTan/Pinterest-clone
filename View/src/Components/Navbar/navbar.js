import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
      },
      title: {
        letterSpacing: 3,
        fontFamily: "Comic Sans MS",
        fontWeight: 500
      },
}));

function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: "#c8232c" }}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Simple Pinterest
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;