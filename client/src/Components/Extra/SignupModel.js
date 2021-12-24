import React, {useState} from 'react';
import {Dialog, Typography, Divider, makeStyles} from '@material-ui/core';
import {Button, TextField, IconButton} from '@mui/material';
import Google from '@mui/icons-material/Google';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1),

        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '450px'
        }
    },
    Heading: {
        textAlign: 'center',
        fontFamily: 'Pacifico',
        marginTop: '20px'
    },
    or: {
        textAlign: 'center',
        fontFamily: 'Pacifico',
        color: 'grey',
        paddingTop: theme.spacing(1)
    },
    closeBtn: {
        backgroundColor: 'black',
        color: 'white',
        '&:hover': {
            backgroundColor: 'black',
            color: 'white'
        }
    },
    linkDiv: {
        textAlign: 'center',
        padding: theme.spacing(2)
    }
}));

const SignupModel = ({open, handleClose}) => {

    const classes = useStyles();

    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');
    const [FirstName,
        setFirstName] = useState('')

    const [LastName,
        setLastName] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email, password, FirstName, LastName);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <Typography variant="h4" component="h4" className={classes.Heading}>
                Sign Up
            </Typography>
            {/* Sign up with email and password */}
            <form onSubmit={handleSubmit} className={classes.root}>
                <TextField label="FirstName" variant="filled" type="text" required/>
                <TextField label="LastName" variant="filled" type="text" required/>
                <TextField label="Email" variant="filled" type="email" required/>
                <TextField label="Password" variant="filled" type="password" required/>

                <Button type="submit" variant="contained">
                    Sign Up
                </Button>
            </form>

            <Divider/>

            {/* Sign up with google */}
            <IconButton
                aria-label="google"
                sx={{
                "&:hover": {
                    backgroundColor: "transparent"
                }
            }}>
                <Google/>
            </IconButton>

            {/* close */}
            <Button className={classes.closeBtn} variant="contained" onClick={handleClose}>
                close
            </Button>
        </Dialog>
    );
};

export default SignupModel;