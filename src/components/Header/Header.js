import React from 'react';
import { NavLink , Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';



const Header = () => {

  const { user,logOut } = useAuth();


    return (
        <div className="header">
            <img className="logo" src={logo} alt="" /> 
            <nav className="d-flex justify-content-between align-items-center">
                <div className="ps-5">
                
                
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/review">Bikes</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                {user.email && <NavLink  to="/dashboard">Dashboard</NavLink>}
                
                </div>
                    <div>
                    {user.email && <span className="display-name" >{user.displayName} </span>}
                {
                    user.email ?<Link to="/home" ><button className="button" onClick={logOut}>Logout</button></Link>
                        : 
                        <NavLink to="/login">Login</NavLink>}
                    </div>
                                 
            </nav>
        </div>
    );
};

export default Header;