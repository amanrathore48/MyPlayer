import React from 'react';
import './header.css';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import logo from './player.icon.png';


function Header() {
    return (
        <div className="navbar">
            <div className="brand">
            <img className="brand-logo" src={logo} alt="" />             
            <h1>My-Player</h1>
            </div>
            <div className="direction">
                <IconButton href="https://github.com/amanrathore48">
                    <GitHubIcon className="hub-icon"/>
                </IconButton>
            </div>        
        </div>
    )
}

export default Header;

