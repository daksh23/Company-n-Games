import React from 'react'
import {Box, Button} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function CardReceive({name, nickName}) {
    return (
        <Box className='playerBox'>

            <Card sx={{
                display: 'flex', width: 'auto',p: '20px'
            }} elevation={10} >
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px',
                    mr: 1,

                }}>
                    <CardContent
                        sx={{
                        flex: '1 0 auto'
                    }}>
                        <Typography component="div" variant="h5">
                            {name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {nickName}
                        </Typography>
                    </CardContent>
                    <Box
                        sx={{
                        display: 'flex',
                        alignItems: 'center',
                        pl: 1,
                        pb: 1,
                        ml: 1,
                    }}>
                        <Button variant="contained" color="primary">
                            Start
                        </Button>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{
                    width: 250
                }}
                    image="/logo512.png"
                    alt="Live from space album cover"/>
            </Card>

        </Box>

    )
}

export default CardReceive
