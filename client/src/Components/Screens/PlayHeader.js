import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from "react-router-dom";

const PlayHeader = ({name}) => {


    const myArray = name.split("/");
    const ps = myArray[0]
    console.log(ps)

    let navigate = useNavigate();

    const closeGame = () => {
        navigate('/');
    }

    return (
        <Box sx={{
            flexGrow: 1
        }}>
            <AppBar
                position="static"
                style={{
                background: "white"
            }}
                elevation={0}>
                <Toolbar>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                        flexGrow: 1
                    }}
                        className='PlayHeader-text'>

                        { ps === 'PUZZLESOLVER' ? ps : name }
                    </Typography>

                    <IconButton
                        color="inherit"
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true">
                        <CloseIcon
                            fontSize='large'
                            className='PlayHeader-close'
                            onClick={() => closeGame()}/>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default PlayHeader