import React from 'react'
import {
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    Avatar,
    IconButton,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Grid,
    Typography,
    Paper
} from '@mui/material';

function Receive() {
    const [dense,
        setDense] = React.useState(false);
    const [secondary,
        setSecondary] = React.useState(false);
    return (
        <Box sx={{
            flexGrow: 1
        }}>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Paper>
                        <img src="https://miro.medium.com/max/1350/1*wtKKatCjkoXz1SpuiqZgJA.jpeg" height="100px" width="auto"/>
                    </Paper>
                </Grid>

                <Grid item xs={2}>
                <Paper className="imgList">

                <img src="https://picsum.photos/seed/picsum/200/300" width="100%" height="150px"/>
                <img src="https://picsum.photos/seed/picsum/200/300" width="100%" height="150px"/>
                <img src="https://picsum.photos/seed/picsum/200/300" width="100%" height="150px"/>
                <img src="https://picsum.photos/seed/picsum/200/300" width="100%" height="150px"/>

                </Paper>
                </Grid>
                
                <Grid item xs={2}>
                    <Paper>

                        <List>
                            {[1, 2, 3, 4].map((p) => (
                                <ListItem>
                                    {p}
                                </ListItem>
                            ))
    }
                        </List>

                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Receive