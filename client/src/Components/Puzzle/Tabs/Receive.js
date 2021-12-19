import React from 'react'
import CardViewer from '../Receives/CardViewer';

function Receive() {

   return(
    <div className='container'>
        <CardViewer />
    </div>
    )
}

export default Receive;





























/*

 const [dense,
        setDense] = React.useState(false);
    const [secondary,
        setSecondary] = React.useState(false);

    const randomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    return (
            <Grid container spacing={1} style={{height:'100vh', background:'red'}}>
                <Grid item xs={7} style={{ height:'78vh' }}>
                <Paper style={{ background:'yellow' }}>
                    <Grid container spacing={0.05}>
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                <Grid item xs={4} style={{Height:'80vh'}}>
                                    <div style={{background:randomColor(), height:'200px'}}>Hooray something is here!</div>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Paper>

                </Grid>

                <Grid item xs={3}>
                    <Paper>
                        <div>
                            {[
                                1,
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

                <Grid item xs={2}   style={{
                        maxHeight: '78vh',
                        overflow: 'auto'
                    }}>

                    <Paper
                      >
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

*/