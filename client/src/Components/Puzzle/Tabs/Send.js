import React from 'react'
import Box from '@mui/material/Box';
import {TextField, Button } from '@mui/material';


function Send() {
    return (
        <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            className="SendBox"
        >
        <TextField id="standard-basic" label="Standard" variant="standard" style={{width:'50%'}} />
        <Button
            variant="contained"
            component="label"
            >
            Upload File
            <input type="file" hidden />
        </Button>
      </Box>
    )
}

export default Send
