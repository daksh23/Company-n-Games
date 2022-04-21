import React, {useEffect, useState} from 'react'
import {Fab, Button} from '@mui/material';
import LoginModel from './LoginModel';
import SignupModel from './SignupModel';
import RockPaperScissors from '../Rock-Paper-Scissors/RockPaperScissors';
import Profile from './Profile';
import {toast, ToastContainer} from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux';

import {Link} from 'react-router-dom'

function Home() {

    const [openLogin,
        setopenLogin] = useState(false);
    const [openSignup,
        setopenSignup] = useState(false);

    const [openRPS,
        setopenRPS] = useState(false);
    const [openProfile,
        setopenProfile] = useState(false);

    const [toggle,
        setToggle] = useState(false);

    useEffect(() => {

        const token = localStorage.getItem('token')
        if (token) {
            setToggle(true)
        }

    }, [toggle])

    // function to handle modal open
    const handleOpen = (string) => {
        if (string === 'login') {
            setopenLogin(true);
        } else if (string === 'signup') {
            setopenSignup(true);
        } else if (string === 'profile') {
            setopenProfile(true);
        } else if (string === 'rps') {
            setopenRPS(true);
        } else {
            setopenLogin(false);
            setopenSignup(false);
        }
    };

    // function to handle modal close
    const handleClose = () => {
        setopenLogin(false)
        setopenSignup(false)
        setopenRPS(false)
        setopenProfile(false)
    };

    const logOut = () => {
        localStorage.removeItem('token')
        setToggle(false)
        toast("You have been logged out")
        window.location.reload(false);
    }

    return (
        <div className="HomeScreen">
            <div className='btnContainer'>
                <Button
                    variant="outlined"
                    className='LargeGameBtns'
                    onClick={() => handleOpen('profile')}>
                    Profile
                </Button>
            </div>
            <div className='btnContainer'>

                        <Button
                            variant='outlined'
                            className='smallGameBtns'
                            style={{
                            marginTop: '5px',
                            fontSize: '15px'
                        }}
                            onClick={() => {
                                toggle ? logOut() : handleOpen('login')
                            }}>
                            { toggle ? 'Logout' : 'Login'}
                        </Button>
                   

                <Link to="/puzzle" className='LinkWrapper'>
                    <Button
                        style={{
                        marginTop: '5px',
                        fontSize: '15px'
                    }}
                        variant="outlined"
                        className='GameBtns'>
                        Puzzle
                    </Button>
                </Link>

                <Link to="/cyw" className='LinkWrapper'>
                    <Button
                        style={{
                        marginTop: '5px',
                        fontSize: '15px'
                    }}
                        variant="outlined"
                        className='GameBtns'>
                        Crack Your Way
                    </Button>
                </Link>

            </div>
            <div className='btnContainer'>
                <Button
                    style={{
                    marginTop: '5px',
                    fontSize: '15px'
                }}
                    variant="outlined"
                    className='GameBtns'
                    onClick={() => handleOpen('rps')}>
                    Rock-Paper-Scissors
                </Button>
                <Button
                    style={{
                    marginTop: '5px',
                    fontSize: '15px',
                    color: "black"
                }}
                    disabled
                    className='GameBtns'>
                    FunFriday
                </Button>

                <Link to="/snake" className='LinkWrapper'>
                    <Button
                        style={{
                        marginTop: '5px',
                        fontSize: '15px'
                    }}
                        variant="outlined"
                        className='GameBtns'>
                        Snake
                    </Button>
                </Link>

            </div>
            <div className='btnContainer'>

                <Link to="/smashtheboss" className='LinkWrapper'>
                    <Button
                        style={{
                        marginTop: '5px',
                        fontSize: '15px'
                    }}
                        variant="outlined"
                        className='GameBtns'>
                        Sm**h the boss
                    </Button>
                </Link>

                <Link to="/ttt" className='LinkWrapper'>
                    <Button
                        style={{
                        marginTop: '5px',
                        fontSize: '15px'
                    }}
                        variant="outlined"
                        className='GameBtns'>
                        Tic-Tac-Toe
                    </Button>
                </Link>

                <Button
                    variant='outlined'
                    className='smallGameBtns'
                    style={{
                    marginTop: '5px',
                    fontSize: '15px'
                }}
                    onClick={() => handleOpen('signup')}>
                    SignUp
                </Button>
            </div>
            <div className='btnContainer'>
                <Button
                    variant="outlined"
                    onClick={() => {
                    toast("Coming soon")
                }}
                    className='LargeGameBtns'>
                    Avatar Builder
                </Button>
            </div>
            <LoginModel open={openLogin} handleClose={handleClose}/>
            <SignupModel open={openSignup} handleClose={handleClose}/>
            <RockPaperScissors open={openRPS} handleClose={handleClose}/>
            <Profile open={openProfile} handleClose={handleClose}/>
            <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar={true}/>
        </div>
    )
}

export default Home