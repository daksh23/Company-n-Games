import React, {useState} from 'react';
import {Dialog, Typography, Divider, makeStyles, Link} from '@material-ui/core';
import {Button, TextField, IconButton} from '@mui/material';

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
            <Typography variant="h4" component="h4" className='profileHeading'>
                Profile
            </Typography>
            <div className='ProfileContainer'>
                <div className='profileImage'>
                    <img
                        style={{ height:'150px', width:'180px' }}
                        src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                        alt="new"/>
                </div>
                <div className='profileFields'>
                    
                </div>
            </div>
        </Dialog>
    )
}

export default Profile