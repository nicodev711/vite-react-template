import React from 'react';
import './BottomNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faBookmark, faPersonSwimming, faUser} from '@fortawesome/free-solid-svg-icons';

const BottomNavbar = () => {
    return (
        <div className="bottom-navbar">
            <button className="nav-button">
                <FontAwesomeIcon icon={faMagnifyingGlass}/> <br/>Explore
            </button>
            <button className="nav-button">
                <FontAwesomeIcon icon={faPersonSwimming} /> <br/>Communtity
            </button>
            <button className="nav-button">
                <FontAwesomeIcon icon={faBookmark} /> <br/>Saved
            </button>
            <button className="nav-button">
                <FontAwesomeIcon icon={faUser}/> <br/>Profile
            </button>
        </div>
    );
}

export default BottomNavbar;
