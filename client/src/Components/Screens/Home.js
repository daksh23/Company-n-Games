import React from 'react'
import {Fab, Button, Divider} from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

function Home() {
    return (
        <div className="HomeScreen">
            <div className="centerButtons">
            <Button variant="outlined" href="puzzle" className="GameBtns">
                Puzzle
            </Button>
            <p>&emsp;</p>
            <Button variant="outlined" href="quiz" className="GameBtns">
                Quiz
            </Button>

            </div>
            <div className='InfoButton'>
            <Fab style={{background:"white"}} elevation={20} aria-label="Help">
                <HelpOutlineOutlinedIcon />
            </Fab>
            </div>
        </div>
    )
}

export default Home
