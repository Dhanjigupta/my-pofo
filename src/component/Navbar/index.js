import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar=(props)=>{
    return(
    <ul className="navbar-nav">
        <li className="nav-item">
         <NavLink exact className="nav-link" activeClassName="active" to="/">Home </NavLink>
        </li>
        <li className="nav-item">
         <NavLink exact className="nav-link" activeClassName="active" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
         <NavLink exact className="nav-link" activeClassName="active" to="/project">Project</NavLink>
        </li>
        <li className="nav-item">
         <NavLink exact className="nav-link" activeClassName="active" to="/blog">Blog</NavLink>
        </li> 
        <li className="nav-item">
         <NavLink exact className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
        </li> 
    </ul>
    )
}

export default Navbar;
