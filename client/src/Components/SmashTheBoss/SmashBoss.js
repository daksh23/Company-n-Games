import React, {useState, useEffect} from 'react'
import {
    Box,
    Grid,
    Button,
    Fab,
    IconButton,
    Container
} from '@mui/material';
import {ToastContainer, toast} from 'react-toastify';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

// import {setBossImage} from '../actions/actions'
import {useDispatch, useSelector} from 'react-redux'
// import Tofile from 'data-uri-to-file';

function SmashBoss() {

    // const dispatch = new useDispatch();

    const {sbi} = useSelector(state => state);

    const [files,
        setFiles] = useState('https://www.pngall.com/wp-content/uploads/5/The-Boss-Baby-PNG.png');

    const [Smashed,
        setSmashed] = useState(true)

    const [Flag,
        setFlag] = useState(false)

    const [imageFlag,
        setimageFlag] = useState(false)
    const [Number,
        setNumber] = useState(0)

    const [Score,
        setScore] = useState(0)

    const [seconds,
        setSeconds] = useState(0);

    const ImgPlace = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'

    useEffect(() => {

        let interval = 0;
        let CounterInterval = null;

        if (Flag) {
            // create interval
            interval = setInterval(() => setNumber(Math.floor(Math.random() * (8 + 1))), 1000);

            CounterInterval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        }

        if (seconds === 60) {
            setSmashed(true);
            console.log('Stop the game');
            setFlag(false);
            setSeconds(0);

            // toast
            toast(`Game Over, You smashed ${Score} times`);
        }

        // clean up interval on unmount
        return () => {
            clearInterval(interval);
            clearInterval(CounterInterval);
        };

    }, [Flag, seconds, imageFlag]);

    // start game
    const StartGame = () => {
        setSmashed(false);
        console.log('Smash the boss');
        setFlag(true);

        // toast message for start game
        toast("Game Started, You can smash the boss now, You have 60 seconds to smash the boss")

    }

    //Stop Game and reset the game
    const StopGame = () => {
        setSmashed(true);
        console.log('Stop the game');
        setFlag(false);
        setSeconds(0);
    }

    // Hanlder
    const SmashHandler = (index) => {

        if (Number === index) {
            setScore(Score + 1);
        }
        return console.log(`Smashed!! : ${index} `);
    }

    // file uplaoding
    const changeHandler = (event) => {

        // dispatch(setBossImage(event.target.files[0]));

    };

    const cs = () => {
        toast('coming soon')

    }

    return (
        <Box sx={{
            flexGrow: 1,
            padding: 2
        }}>

            <Container maxWidth='lg'>
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
                                    className='test'
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
                                    {Number === index
                                        ? <img
                                                alt='Boss'
                                                src={files}
                                                height='100%'
                                                width='50%'
                                                style={{
                                                borderRadius: '100%',
                                                boxShadow: '0 5px 2px 0 rgba(0, 0, 0, 0.2), 0 5px 2px 0 rgba(0, 0, 0, 0.19)'
                                            }}/>
                                        : <img
                                            alt='Boss'
                                            src={ImgPlace}
                                            height='100%'
                                            width='50%'
                                            style={{
                                            borderRadius: '100%'
                                        }}/>}
                                </button>
                            </Grid>
                        ))}
                </Grid>
            </Container>
            <div className='SmashBtnBox'>
                <Button
                    variant="contained"
                    size="large"
                    style={{
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
            <div
                    style={{
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'start',
                    padding: 0,
                    fontSize: '1.2rem',
                    margin: 0,
                    color: 'gray',
                    marginBottom: 5
                }}>
                    <h5
                        style={{
                        padding: 0,
                        margin: 0
                    }}>
                        Your Score : {Score}
                    </h5>
                    <h5
                        style={{
                        padding: 0,
                        margin: 0
                    }}>
                        Time: {seconds} &nbsp; Sec
                    </h5>
            </div>
            <div className='InfoButton'>
                <Fab onClick={cs}>
                    <label htmlFor="icon-button-file">
                        {/* <input id="icon-button-file" type="file" onChange={changeHandler} hidden/> */}
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera/>
                        </IconButton>
                    </label>
                </Fab>
            </div>
            <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar={true}/>
        </Box>
    )
}

export default SmashBoss