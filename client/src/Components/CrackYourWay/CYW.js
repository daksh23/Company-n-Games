import React, {useState} from 'react'
import {
    Box,
    TextField,
    Fab,
    Card,
    CardContent,
    CardActions,
    Button,
    Typography
} from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import MapModel from './MapModel';

function CYW() {

    const [open,
        setOpen] = useState(false);

    // function to handle modal open
    const handleOpen = () => {
        setOpen(true);
    };

    // function to handle modal close
    const handleClose = () => {
        setOpen(false);
    };

    const [CurrentQues,
        setCurrentQues] = useState(0)
    const [ans,
        setans] = useState("");

    const handleAns = () => {
        let timer;
        if (ques[CurrentQues].Ans === ans && CurrentQues < ques.length - 1) {
            console.log('matched...!!!!')

            timer = setTimeout(() => {
                setCurrentQues(CurrentQues + 1);
                setans("");
            }, 5000);

        } else {
            console.log('not matched...!!!!')
        }
        return () => clearTimeout(timer);
    }

    return (
        <Box
            sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '30px'
        }}>

            <Card
                sx={{
                minWidth: 300,
                width: '50%'
            }}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {CurrentQues + 1}. {ques[CurrentQues].Question}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {ques[CurrentQues]
                            .Options
                            .map((i, index) => {
                                return <p key={index}>
                                    {index + 1}. &nbsp; {i.ans}
                                </p>
                            })
}
                    </Typography>
                </CardContent>
                <div className='CardAction'>
                    <TextField
                        style={{
                        width: '100%'
                    }}
                        id="outlined-basic"
                        label="Answer"
                        variant="outlined"
                        placeholder="Type your QR Code Text"
                        value={ans}
                        onChange={(e) => {
                        setans(e.target.value);
                    }}/>
                    &nbsp;
                    <br/>
                    <Button
                        size="small"
                        variant='contained'
                        onClick={handleAns}
                        style={{
                        height: 'auto'
                    }}>Submit</Button>
                </div>
            </Card>

            <div className='InfoButton'>
                <Fab
                    style={{
                    background: "white"
                }}
                    elevation={20}
                    aria-label="Help"
                    onClick={handleOpen}>
                    <MapIcon/>
                </Fab>
                <MapModel open={open} handleClose={handleClose}/>
            </div>
        </Box>
    )
}

// Questions set

const ques = [
    {
        Question: "Owner of SpaceX?",
        Options: [
            {
                ans: 'Elon Mol (jv101)'
            }, {
                ans: 'Elon Gujju (jv201)'
            }, {
                ans: 'Eon musk (jv301)'
            }, {
                ans: 'Elon Musk (jv401)'
            }
        ],
        Ans: 'jvElon Musk101'
    }, {
        Question: " Apple marketcap value ? ",
        Options: [
            {
                ans: '2T(jv101)'
            }, {
                ans: '3T(jv201)'
            }, {
                ans: '4T(jv301)'
            }, {
                ans: '5T(jv401)'
            }
        ],
        Ans: 'jv3T104'
    }
]

export default CYW
