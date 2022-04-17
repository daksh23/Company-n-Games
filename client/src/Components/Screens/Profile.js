import React from 'react';
import {Dialog, makeStyles, Link} from '@material-ui/core';
import {Button, TextField } from '@mui/material';

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

const Profile = ({open, handleClose}) => {
    const classes = useStyles();

    return (
        <Dialog open={open} onClose={handleClose}>
            <div className="card">
                <img
                    src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
                    alt="John"
                    style={{width:"100%"}}/>
                <div className='ProfileText'>
                    <TextField className='profile-text' fullWidth  defaultValue='Name'  id="Name"  variant="filled" />
                </div>
                <div className='ProfileText'>
                    <TextField className='Profile-text' fullWidth  defaultValue='UserName'  id="UserName"  variant="filled" />
                </div>
                <div className='ProfileText'>
                    <TextField className='Profile-text' fullWidth  defaultValue='Email'  id="Email"  variant="filled" />
                </div>
                <div className='ProfileText'>
                    <TextField className='Profile-text' fullWidth  defaultValue='password'  id="Password"  variant="filled" />
                </div>

                <button className='updateBtn'> Update </button>

            </div>
        </Dialog>
    )
}

export default Profile