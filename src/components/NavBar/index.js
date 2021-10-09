import * as React from 'react';
import { Link} from "react-router-dom";

const Nav = () => {
  return (
    <div style ={{paddingTop:"20px"}}>
      <ul className="navbar">
        <li>
            <Link to='/'>
                About Me
            </Link>
        </li>
        <li>
            <Link to='/portfolio'>
                Portfolio
            </Link>
        </li>
        <li>
            <Link to='/resume'>
                Resume
            </Link>
        </li>
        <li>
            <Link to='/contact'>
                Contact
            </Link>
        </li>
      </ul>
    </div>

      
  )
}

export default Nav;


//   const [value, setValue] = React.useState(0);
//   console.log(value + "This is the value")

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     console.log(event)
//   };

//   return (
//     <Box sx={{ width: '100%', bgcolor: '#ec160a' }}>
//       <Tabs value={value} onChange={handleChange} centered>
//         <Tab label="About Me" />
//         <Tab label="Portfolio" />
//         <Tab label="Contact Me" />
//         <Tab label="Resume" />
//       </Tabs>
//     </Box>
//   );
// }