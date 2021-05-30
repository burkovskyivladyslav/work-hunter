import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import logo from './images/logo.png'

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src={logo} alt="" />
                <h1 style={{fontSize:'20px', margin:'4px .1%', width: '167px'}}>WORK HUNTER</h1>
                
                {/* <div className="header_search">
                    <SearchIcon></SearchIcon>
                    <input type="text" name="" id="" />
                </div> */}
            </div>

            <div className="header_right">
                    <HeaderOption Icon={HomeIcon} title="Home"/>
                    <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                    <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                    <HeaderOption Icon={ChatIcon} title="Messaging"/>
                    <HeaderOption Icon={NotificationsIcon} title="Notification"/>
                    <HeaderOption avatar="https://i.ibb.co/Gdx7FY5/Sultana-Tasnim-Jahan.jpg" title="Me"/>

                    <div className="header_search">
                    <SearchIcon></SearchIcon>
                    <input type="text" name="" id="" />
                </div>

            </div>
        </div>
    )
}

export default Header
