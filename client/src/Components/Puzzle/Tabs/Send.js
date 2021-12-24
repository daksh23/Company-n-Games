import React, {useState} from 'react'
import Box from '@mui/material/Box';
import {TextField, Button} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ImageThumb = ({image}) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} style={{height:"450px", width:"450px"}} />;
};

function Send() {

    const [file,
        setFile] = React.useState("");
    const [Uploaded,
        setUploaded] = useState(true)

    const changeHandler = (event) => {
        setFile(event.target.files[0]);
        setUploaded(false);
        toast("File Uploaded")
    };

    return (
        <div>
            <Box
                component="form"
                sx={{
                '& > :not(style)': {
                    m: 1,
                    width: '25ch'
                }
            }}
                noValidate
                autoComplete="off"
                className="SendBox">
                <TextField
                    id="standard-basic"
                    label="Colleagues"
                    variant="standard"
                    style={{
                    width: '50%'
                }}/>
               
                <Button variant="contained" component="label" style={{backgroundColor:"black", color:'white'}}>
                    Upload image
                    <input type="file" name="file" onChange={changeHandler} hidden/>
                </Button>
                <Button variant="contained" component="label" disabled={Uploaded}>
                    send
                </Button>
            </Box>
            <Box  className="SendBox" mt={2}>
                {file && <ImageThumb image={file}/>}
            </Box>
            <ToastContainer />
        </div>
    )
}

export default Send
