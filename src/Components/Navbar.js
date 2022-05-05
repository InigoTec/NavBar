import React from "react";
import './CSS/navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import PersonIcon from '@mui/icons-material/Person';
import StyleIcon from '@mui/icons-material/Style';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

function Navbar(){

    return(
        <div>
            <div className="topbar">
                <div className="topbar-container">
                    <a className="topbar-logo" href="#"> Komorebi</a>
                    <div>
                        
                    </div>
                </div>
            </div>
            <nav className="sidebar">
            {/* <IconButton><SearchIcon /></IconButton> */}
            <a className="sidebar-element" href="#"><SearchIcon className="svg-icons" /><br />Search</a>
            <a className="sidebar-element" href="#"><RadioButtonCheckedIcon className="svg-icons" /><br />Record</a>
            <a className="sidebar-element" href="#"><PersonIcon className="svg-icons" /><br />Users</a>
            <a className="sidebar-element" href="#"><StyleIcon className="svg-icons" /><br />Tags</a>
            <a className="sidebar-element" href="#"><AnalyticsIcon className="svg-icons" /><br />Statistics</a>
            <a className="sidebar-element" href="#"><SettingsIcon className="svg-icons" /><br />Settings</a>
            <a className="sidebar-element" href="#"><HelpIcon className="svg-icons" /><br />Help</a>
        </nav>

        </div>
        
        
    );

}

export default Navbar;
