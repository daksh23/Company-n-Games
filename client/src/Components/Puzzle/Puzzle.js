import React from 'react' 
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import TabPanel from './Tabs/TabPanel'
import Send from './Tabs/Send'
import Receive from './Tabs/Receive'
import History from './Tabs/History'


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Puzzle(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper'}}>
    <AppBar position="static" style={{background:"black"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
      >
        <Tab label="SEND" />
        <Tab label="Receive" />
        <Tab label="HISTORY"  />
      </Tabs>
    </AppBar>
  
      <TabPanel value={value} index={0}>
       <Send />
      </TabPanel>
      <TabPanel value={value} index={1} >
        <Receive />
      </TabPanel>
      <TabPanel value={value} index={2} >
        <History />     
      </TabPanel>
  </Box>
    )
}

export default Puzzle