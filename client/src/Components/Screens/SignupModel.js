import React, {useState} from 'react';
import {Dialog, Typography, Divider, makeStyles} from '@material-ui/core';
import {Button, TextField, IconButton} from '@mui/material';
import Google from '@mui/icons-material/Google';
import {useDispatch, useSelector} from 'react-redux';
import {SignUpAction} from '../States/actions/actions';

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
    const dispatch = useDispatch()
    const {signup} = useSelector(state => state)

    const { loading } = signup;

    const [User,
        setUser] = useState({'firstname': '', 'lastname': '', 'email': '', 'password': ''});

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(SignUpAction(User)); // dispatch action to reducer
    };

    

    return (
        <Dialog open={open} onClose={handleClose}>

            {loading
                ? "Loading"
                : <React.Fragment>
                    <Typography variant="h4" component="h4" className={classes.Heading}>
                        Sign Up
                    </Typography>
                    {/* Sign up with email and password */}
                    <form onSubmit={handleSubmit} className={classes.root}>
                        <TextField
                            value={User.firstname}
                            onChange={e => {
                            setUser({
                                ...User,
                                firstname: e.target.value
                            })
                        }}
                            label="FirstName"
                            variant="filled"
                            type="text"
                            required/>
                        <TextField
                            value={User.lastname}
                            onChange={e => {
                            setUser({
                                ...User,
                                lastname: e.target.value
                            })
                        }}
                            label="LastName"
                            variant="filled"
                            type="text"
                            required/>
                        <TextField
                            value={User.email}
                            onChange={e => {
                            setUser({
                                ...User,
                                email: e.target.value
                            })
                        }}
                            label="Email"
                            variant="filled"
                            type="email"
                            required/>
                        <TextField
                            value={User.password}
                            onChange={e => {
                            setUser({
                                ...User,
                                password: e.target.value
                            })
                        }}
                            label="Password"
                            variant="filled"
                            type="password"
                            required/>

                        <Button type="submit" variant="contained">
                            Sign Up
                        </Button>
                    </form>

                    <Divider/> {/* Sign up with google */}
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
                </React.Fragment>
}

        </Dialog>
    );
};

export default SignupModel;