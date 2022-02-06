import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import LoginModel from './LoginModel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import IconButton from '@mui/material/IconButton';
import SignupModel from './SignupModel';

function Header() {

    const [openLogin, setopenLogin] = useState(false);
    const [openSignup, setopenSignup] = useState(false);

    // function to handle modal open
    const handleOpen = (string) => {
        if (string === 'login') {
          setopenLogin(true);
        }else if(string === 'signup'){
          setopenSignup(true);
        }else{
          setopenLogin(false);
          setopenSignup(false);
        }
        setAnchorEl(null);
    };

    // function to handle modal close
    const handleClose = () => {
      setopenLogin(false)
      setopenSignup(false)
    };


    //  handle menu open and close
    const [anchorEl,
      setAnchorEl] = useState(null);
    
    const openMenu = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const MenuhandleClose = () => {
        setAnchorEl(null);
    };
    

    return (
        <Box sx={{
            flexGrow: 1
        }}>
            <AppBar
                position="static"
                style={{
                background: "black",
            }} elevation={0}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                        flexGrow: 1
                    }}>
                        <Link
                            to='/'
                            style={{
                            textDecoration: "none",
                            color:'white',
                            fontFamily:"'Mochiy Pop P One', sans-serif"
                        }}>
                            Fun'Friday
                        </Link>
                    </Typography>

                    <IconButton
                        color="inherit"
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={openMenu
                        ? 'true'
                        : undefined}
                        onClick={handleClick}>
                        <AccountBoxIcon fontSize='large'/>
                    </IconButton>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={MenuhandleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button'
                    }}>
                        <MenuItem onClick={() => handleOpen('login')}>Login</MenuItem>
                        <MenuItem onClick={() => handleOpen('signup')}>SignUp</MenuItem>
                    </Menu>

                     <LoginModel open={openLogin} handleClose={handleClose}/>
                     <SignupModel open={openSignup} handleClose={handleClose}/>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
