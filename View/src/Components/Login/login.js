import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

const useStyles = makeStyles(theme => ({
    facebookItem: {
        backgroundColor: '#3b5998',
        margin: '1rem',
        width: '500px',
        textAlign: 'center'
    },
    dialogTitle: {
        fontFamily: "Comic Sans MS",
        fontSize: '1.5rem',
        textAlign: 'center',
    },
    aTagText: {
        textDecoration: 'none',
        fontSize: '1.5rem',
        fontFamily: "Comic Sans MS",
        color: '#ffffff',
    }
}));

function Login(props) {
    const classes = useStyles();
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    }

    return (
        <div>
            <Dialog onClose={handleClose} open={open} aria-labelledby="dialog-title">
                <DialogTitle 
                className={classes.dialogTitle} 
                id="dialog-title" 
                disableTypography>
                    Login
                </DialogTitle>
                <DialogContent className={classes.facebookItem}>
                    <a className={classes.aTagText} href="https://localhost:8081/user/facebook/login">
                        facebook
                    </a>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Login;
