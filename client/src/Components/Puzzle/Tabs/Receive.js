import React from 'react'
import {Box, List, ListItem, Grid, Paper} from '@mui/material';

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
                <Grid item xs={7}>
                    <Paper>
                        Puzzle area
                    </Paper>

                </Grid>

                <Grid item xs={3}>
                    <Paper>
                        <div>
                            {[
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9
                            ].map(i => <img
                                src="https://miro.medium.com/max/1350/1*wtKKatCjkoXz1SpuiqZgJA.jpeg"
                                height="100px"
                                width="50%"/>)
                            }

                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={2}>

                    <Paper
                        style={{
                        maxHeight: '72vh',
                        overflow: 'auto'
                    }}>
                        <List>
                            {[
                                1,
                                2,
                                3,
                                4,
                                2,
                                3,
                                4,
                                2,
                                3,
                                4,
                                2,
                                3,
                                4,
                                2,
                                3,
                                4
                            ].map((p) => (
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