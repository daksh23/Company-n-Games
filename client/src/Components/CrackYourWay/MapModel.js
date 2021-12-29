import React from 'react'
import {Dialog, Typography, Divider, makeStyles, Link} from '@material-ui/core';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

function MapModel({open, handleClose}) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <Box
                sx={{
                flexGrow: 1,
                textAlign: 'center'
            }}>
                MAP
                <Grid
                    container
                    spacing={1}
                    style={{
                    background: 'black',
                    margin: 0,
                    width: 500
                }}>
                    {[
                        1,
                        2,
                        3,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10
                    ].map((i,index) => (

                        <Grid
                            item
                            xs={4}
                            style={{
                            padding: 30
                        }} key={index}>
                            <Item>
                                <Typography
                                    variant="h6"
                                    style={{
                                    color: 'black'
                                }}>
                                    {i + '0' + 1}
                                </Typography>
                                <div className='zoom'>
                                    <img
                                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png'
                                        height='50px'
                                        width='50px'/>
                                </div>
                            </Item>
                        </Grid>

                    ))
}
                </Grid>
            </Box>
        </Dialog>
    )
}


export default MapModel
