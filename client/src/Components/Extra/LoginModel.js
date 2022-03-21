import React, {useState, useEffect} from 'react';
import {Dialog, Typography, Divider, makeStyles, Link} from '@material-ui/core';
import {Button, TextField, IconButton} from '@mui/material';
import Google from '@mui/icons-material/Google';
import { useSelector, useDispatch } from 'react-redux'
import { LoginAction } from '../States/actions/actions';

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

    const dispatch = useDispatch()

    const classes = useStyles();

    const [User,
        setUser] = useState({'email': '', 'password': ''});

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(LoginAction(User)); // dispatch action to reducer
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
                    value={User.email}
                    onChange={e => setUser({...User, email:e.target.value})}
                    required/>
                <TextField
                    label="Password"
                    variant="filled"
                    type="password"
                    value={User.password}
                    onChange={e => setUser({...User, password:e.target.value})}
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