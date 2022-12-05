import React from 'react';
import {NavLink} from "react-router-dom";

import './styles.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to='/trading'><button className='navbar__trading'>Trading</button></NavLink>
            <NavLink to='/archive'><button className='navbar__archive'>Archive</button></NavLink>
        </div>
    );
};

export default Navbar;