import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function SmashBoss() {

    const [Smashed,
        setSmashed] = useState(true)
    const [Images,
        setImages] = useState('https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png')

    const [Flag,
        setFlag] = useState(false)
    const [Number,
        setNumber] = useState(0)

    useEffect(() => {
        
        let interval = 0;

        if (Flag) {
            // create interval
            interval = setInterval(
            // set number every 5s
            () => setNumber(Math.floor(Math.random() * (8 + 1))), 1000);
        }
         // clean up interval on unmount
         return () => {
            clearInterval(interval);
        };

    }, [Flag])

    const StartGame = () => {
        setSmashed(false);
        console.log('Smash the boss');
        setFlag(true);
    }

    const StopGame = () => {
        setSmashed(true);
        console.log('Stop the game');
        setFlag(false);
    }

    const SmashHandler = (index) => {
        return console.log(`Smashed!! : ${index} `);
    }

    return (
        <Box sx={{
            flexGrow: 1,
            padding: 2
        }}>
            {Number}
            <Grid
                container
                spacing={{
                xs: 1,
                md: 2
            }}
                columns={{
                xs: 4,
                sm: 8,
                md: 12
            }}>
                {Array
                    .from(Array(9))
                    .map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <button
                                style={{
                                textAlign: "center",
                                background: 'white',
                                height: '160px',
                                width: '100%',
                                position: 'relative',
                                borderRadius: '5px',
                                border: '2px solid #e0e0e0'
                            }}
                                onClick={() => SmashHandler(index)}
                                disabled={Smashed}>
                                <img src={Images} height='100%' width='50%'/>
                            </button>
                        </Grid>
                    ))}
            </Grid>
            <div className='SmashBtnBox'>
                <Button
                    variant="contained"
                    size="large"
                    style={{
                    backgroundColor: 'black',
                    color: 'white'
                }}
                    onClick={() => StartGame()}>
                    Start
                </Button>
                &ensp;
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => StopGame()}
                    disabled={Smashed}>
                    Stop
                </Button>
            </div>
        </Box>
    )
}

export default SmashBoss

//