/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// import { fontFamily } from '@mui/system';

const preventDefault = (event) => event.preventDefault();

export default function Footer() {
  return (
    <Box
      sx={{fontFamily:"Roboto,Helvetica,Arial, sans-serif", color: 'black',  width: '100%', bgcolor: '#ec160a', typography: 'body1', alignItems: 'spaced-evenly', 
        '& > :not(style) + :not(style)': {
          ml: 20
        },
      }}
      onClick={preventDefault} 
     >
       <div className="test">
      <Link href="https://github.com/JSheleg">GitHub</Link>
      <Link href="https://www.linkedin.com/in/jessicasheleg/">LinkedIn</Link>
      <Link href="#">TBD </Link>
      </div>
    </Box>
  );
}

