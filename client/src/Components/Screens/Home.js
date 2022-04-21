import React, { useState} from 'react'
import { Button} from '@mui/material';
import LoginModel from './LoginModel';
import SignupModel from './SignupModel';
import RockPaperScissors from '../Rock-Paper-Scissors/RockPaperScissors';
import Profile from './Profile';
import {toast} from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux';

import {Link} from 'react-router-dom'
import { TOGGLE_MODEL,SIGN_UP_TOGGLE_MODEL } from '../States/const';

function Home() {

    const dispatch = useDispatch()

    const { token } = useSelector(state => state.login)

    const [openRPS,
        setopenRPS] = useState(false);
    const [openProfile,
        setopenProfile] = useState(false);

    
    // function to handle modal open
    const handleOpen = (string) => {
        if (string === 'login') {
            dispatch({type: TOGGLE_MODEL, payload: true});

        } else if (string === 'signup') {
            dispatch({type: SIGN_UP_TOGGLE_MODEL, payload: true});
        } else if (string === 'profile') {
            setopenProfile(true);
        } else if (string === 'rps') {
            setopenRPS(true);
        } else {
            dispatch({type: SIGN_UP_TOGGLE_MODEL, payload: true});
            
            dispatch({type: TOGGLE_MODEL, payload: false});

        }
    };

    // function to handle modal close
    const handleClose = () => {
        setopenRPS(false)
        setopenProfile(false)
    };

    const logOut = () => {
        localStorage.removeItem('token')
        toast("You have been logged out")
        window
            .location
            .reload(false);
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
                    token !== ""
                        ? logOut()
                        : handleOpen('login')
                }}>
                    {token !== ""
                        ? 'Logout'
                        : 'Login'}
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
                    disabled={token !== "" ? true : false }
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
            <LoginModel/>
            <SignupModel />
            <RockPaperScissors open={openRPS} handleClose={handleClose}/>
            <Profile open={openProfile} handleClose={handleClose}/>
        </div>
    )
}

export default Home