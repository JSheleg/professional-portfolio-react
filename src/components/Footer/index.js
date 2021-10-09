/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Link} from "react-router-dom";

const Footer = () => {
  return (
    <div >
      <ul className="footer">
        <li>
            <Link href = "https://github.com/JSheleg">
                GitHub
            </Link>
        </li>
        <li>
            <Link href ="https://www.linkedin.com/in/jessicasheleg/">
                LinkedIn
            </Link>
        </li>
        <li>
            <Link href ="#">
                TBD
            </Link>
        </li>
      </ul>
    </div>

      
  )
}

export default Footer;



