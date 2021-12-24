import React, {useState} from 'react';
import {Dialog, Typography, Divider, makeStyles, Link} from '@material-ui/core';
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
    closeBtn: {
        backgroundColor: 'black',
        color: 'white',
        '&:hover': {
            backgroundColor: 'black',
            color: 'white'
        }
    },
    linkDiv: {
        padding: theme.spacing(2)
    }
}));

const LoginModel = ({open, handleClose}) => {

    const classes = useStyles();

    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email, password);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <Typography variant="h4" component="h4" className={classes.Heading}>
                Login
            </Typography>
            {/* login with email and password */}
            <form onSubmit={handleSubmit} className={classes.root}>
                <TextField
                    label="Email"
                    variant="filled"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required/>
                <TextField
                    label="Password"
                    variant="filled"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required/>

                <Link href="#" variant="body2" className={classes.linkDiv}>
                    Forgot password?
                </Link>

                <Button type="submit" variant="contained">
                    Login
                </Button>
            </form>

            <Divider/>

            {/* login with google */}
            <IconButton
                aria-label="google"
                sx={{
                "&:hover": {
                    backgroundColor: "transparent"
                }
            }}>
                <Google/>
            </IconButton>

            {/* part */}
            <Divider variant="middle"/> {/* close */}
            <Button className={classes.closeBtn} variant="contained" onClick={handleClose}>
                close
            </Button>
        </Dialog>
    );
};

export default LoginModel;