import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SingleBox from './SinglePlayer/SingleBox';

function Ttt() {

    const [PlayerMode,
        setPlayerMode] = useState('single')

    const HandlerPlayerMode = (value) => {
        setPlayerMode(value)
        console.log(value)
    }

    return (
        <Box>
            <div
                style
                ={{
                marginTop: '10px',
                width: '100%',
                justifyContent: 'center',
                display: 'flex',
                justifyItems: 'center'
            }}>
                <Button size="large" onClick={() => HandlerPlayerMode('single')}>
                    Single Player
                </Button>
                <span>
                    &nbsp;&nbsp;&nbsp;
                </span>
                <Button size="large" onClick={() => HandlerPlayerMode('multiplayer')}>
                    Multi player
                </Button>
            </div>
            <SingleBox/>
        </Box>
    )
}

export default Ttt