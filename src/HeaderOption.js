import React from 'react';
import './HeaderOption.css'
import { Avatar } from "@material-ui/core"
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';
import MenuIcon from '@material-ui/icons/Menu';


function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser)
    return (
        <div className="">
            <div onClick={onClick} className="headerOption">
                <div className="header-option-top">
                    {Icon && <Icon className="headerOption_icon" />}
                    {avatar &&
                        <Avatar className="headerOption_icon"  >
                            {user?.email[0]}
                        </Avatar>
                    }
                </div>
                <h3 className="headerOption_title">{title}</h3>
            </div>
        </div>
    )
}

export default HeaderOption
