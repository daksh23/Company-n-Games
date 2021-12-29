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
        if(ques[CurrentQues].Ans === ans){
            // setCurrentQues(CurrentQues+1);
            // setans("");
            console.log('matched...!!!!')
        }
        else{
            console.log('not matched...!!!!')
        }
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

            <Card sx={{
                minWidth: 300
            }}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {ques[CurrentQues].Question}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {ques[CurrentQues]
                            .Options
                            .map((i, index) => {
                                return <p key={index}>
                                    {index + 1}
                                    {i.ans}
                                </p>
                            })
}
                    </Typography>
                </CardContent>
                <CardActions>
                    <TextField
                        id="outlined-basic"
                        label="Answer"
                        variant="outlined"
                        placeholder="Type your QR Code Text"
                        value={ans}
                        onChange={(e) => {
                            setans(e.target.value);
                          }}/>
                    <Button size="small" onClick={handleAns}>Submit</Button>
                </CardActions>
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
                ans: 'Elon Mol(jv103)'
            }, {
                ans: 'Elon Gujju(jv104)'
            }, {
                ans: 'Eon musk(jv102)'
            }, {
                ans: 'Elon Musk(jv101)'
            }
        ],
        Ans: 'jvElon Musk101'
    },
    // {Question:" Apple marketcap value ? ", Options:[a:'',b:'',c:'',d:''],
    // Ans:''}, {Question:"Upcoming Movie of marvel?",
    // Options:[a:'',b:'',c:'',d:''], Ans:''}
]

export default CYW
