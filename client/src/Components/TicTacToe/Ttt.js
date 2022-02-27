import React, {useEffect, useState} from 'react'
import MultiplayerBox from './MultiPlayer/MultiplayerBox';
import TextField from '@mui/material/TextField';

import Container from '@mui/material/Container';

function Ttt() {

    const [PlayerName,
        SetPlayerName] = useState({"x": '', "o": ''})

    useEffect(() => {}, [PlayerName]);

    console.log(PlayerName);

    return (
        <Container maxWidth="sm">
            <div className='PlayerName'>
                <TextField
                    id="standard-basic"
                    label="xPlayer"
                    variant="standard"
                    value={PlayerName.x}
                    onChange={e => {
                    SetPlayerName({
                        ...PlayerName,
                        x: e.target.value
                    });
                }}/>
                &nbsp; &nbsp;  &nbsp; &nbsp;
                <TextField
                    id="standard-basic"
                    label="oPlayer"
                    variant="standard"
                    value={PlayerName.o}
                    onChange={e => {
                    SetPlayerName({
                        ...PlayerName,
                        o: e.target.value
                    });
                }}/>
            </div>
            <div>
                
            </div>
            <MultiplayerBox PlayerName={PlayerName} SetPlayerName={SetPlayerName}/>
        </Container>
    )
}

export default Ttt