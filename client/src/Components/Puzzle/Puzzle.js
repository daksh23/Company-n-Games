import React from 'react' 
import PropTypes from 'prop-types';
import {AppBar, Tabs, Tab, Box} from '@mui/material';
import TabPanel from './Tabs/TabPanel'
import Send from './Tabs/Send'
import Receive from './Tabs/Receive'
import History from './Tabs/History'


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Puzzle() {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
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
        <Tab label="challenges" />
        <Tab label="Send challenges" />
        <Tab label="HISTORY"  />
      </Tabs>
    </AppBar>
  
      <TabPanel value={value} index={0}>
        <Receive />
      </TabPanel>
      <TabPanel value={value} index={1} >
       <Send />
      </TabPanel>
      <TabPanel value={value} index={2} >
        <History />     
      </TabPanel>
  </Box>
    )
}

export default Puzzle