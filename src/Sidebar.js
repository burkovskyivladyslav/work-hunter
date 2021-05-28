import React from 'react';
import {Avatar} from "@material-ui/core"
const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="sidebar__top">
            <img src="" alt="" />
            <Avatar className="sidebar__avatar"/>
            <h2>Sakib Ahmed</h2>
            <h4>React Developer</h4>
            <div className="sidebar__stats">
            <div className="sidebar__state">
                <p>Who viewed your profile</p>
                <p className="sidebar__stateNumber">234</p>
            </div>
            <div className="sidebar__state">
                <p>Views on post</p>
                <p className="sidebar__stateNumber">234</p>
            </div>

            </div>


        </div>
            
        </div>
    );
};

export default Sidebar;