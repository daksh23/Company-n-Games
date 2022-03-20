import React, {useState} from 'react'
import {Fab, Button} from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import {Container, Grid, Paper, Typography} from '@material-ui/core';
import LoginModel from '../Extra/LoginModel';
import SignupModel from '../Extra/SignupModel';
import RockPaperScissors from '../Rock-Paper-Scissors/RockPaperScissors';

function Home() {

    const [openLogin,
        setopenLogin] = useState(false);
    const [openSignup,
        setopenSignup] = useState(false);
    
    const [openRPS, setopenRPS] = useState(false);
        

    // function to handle modal open
    const handleOpen = (string) => {
        if (string === 'login') {
            setopenLogin(true);
        } else if (string === 'signup') {
            setopenSignup(true);
        } 
        else if (string === 'rps') {
            setopenRPS(true);
        }
        else {
            setopenLogin(false);
            setopenSignup(false);
        }
    };

    // function to handle modal close
    const handleClose = () => {
        setopenLogin(false)
        setopenSignup(false)
        setopenRPS(false)
    };

        return (
        <div className="HomeScreen">
            <div className='btnContainer'>
                <Button variant="outlined" className='LargeGameBtns' href='/profile' >
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
                    onClick={() => handleOpen('login')}>
                    Login
                </Button>

                <Button
                    style={{
                    marginTop: '5px',
                    fontSize: '15px'
                }}
                    href="puzzle"
                    variant="outlined"
                    className='GameBtns'>
                    Puzzle
                </Button>
                <Button
                    style={{
                    marginTop: '5px',
                    fontSize: '15px'
                }}
                    href="cyw"
                    variant="outlined"
                    className='GameBtns'>
                    Crack Your Way
                </Button>
            </div>
            <div className='btnContainer'>
                <Button
                    style={{
                    marginTop: '5px',
                    fontSize: '15px'
                }}
                    variant="outlined"
                    className='GameBtns' onClick={() => handleOpen('rps')}>
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
                <Button
                    style={{
                    marginTop: '5px',
                    fontSize: '15px'
                }}
                    href="snake"
                    variant="outlined"
                    className='GameBtns'>
                    Snake
                </Button>
            </div>
            <div className='btnContainer'>
                <Button
                    style={{
                    marginTop: '5px',
                    fontSize: '15px'
                }}
                    href="smashtheboss"
                    variant="outlined"
                    className='GameBtns'>
                    Sm**h the boss
                </Button>
                <Button
                    style={{
                    marginTop: '5px',
                    fontSize: '15px'
                }}
                    href="ttt"
                    variant="outlined"
                    className='GameBtns'>
                    Tic-Tac-Toe
                </Button>
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
                <Button variant="outlined" className='LargeGameBtns' href='/profile' >
                    Profile Builder
                </Button>
            </div>
            <LoginModel open={openLogin} handleClose={handleClose}/>
            <SignupModel open={openSignup} handleClose={handleClose}/>
            <RockPaperScissors open={openRPS} handleClose={handleClose} />
        </div>
    )
}

export default Home