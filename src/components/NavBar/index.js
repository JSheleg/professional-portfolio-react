import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);
  console.log(value + "This is the value")

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log(event)
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#ec160a' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="About Me" />
        <Tab label="Portfolio" />
        <Tab label="Contact Me" />
        <Tab label="Resume" />
      </Tabs>
    </Box>
  );
}