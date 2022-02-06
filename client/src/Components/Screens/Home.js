import React from 'react'
import {Fab, Button} from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

function Home() {
    return (
        <div className="HomeScreen">
            <div className="centerButtons">
                <Button variant="outlined" href="puzzle" className="GameBtns">
                    Puzzle
                </Button>
                <p>&emsp;</p>
                <Button variant="outlined" href="cyw" className="GameBtns">
                    Crack Your Way
                </Button>
                <p>&emsp;</p>

                <Button variant="outlined" href="smashtheboss" className="GameBtns">
                    Sm**h the boss
                </Button>
                <p>&emsp;</p>

                <Button variant="outlined" href="ttt" className="GameBtns">
                    Tic-Tac-Toe
                </Button>

            </div>
            <div className='InfoButton'>
                <Fab
                    style={{
                    background: "white"
                }}
                    elevation={20}
                    aria-label="Help">
                    <HelpOutlineOutlinedIcon/>
                </Fab>
            </div>

          
        </div>
    )
}

export default Home

                    // <div class="grid-wrapper">
                    //     <div class="box puzzle">Puzzle</div>
                    //     <div class="box ttt">Tic Tac Toe</div>
                    //     <div class="box cyw">Crack your way</div>
                       
                    //      {/* <div class="box g">G</div> */}
                    //     <div class="box STheB">Smash The B*ss</div>
                    // </div>