import React from 'react';
import './Navbar.module.css';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <div className={s.item}><NavLink activeClassName={s.active} to={'/profile'}>Profile</NavLink></div>
                <div className={s.item}><NavLink activeClassName={s.active} to={'/dialogs'}>Messages</NavLink></div>
                <div className={s.item}><NavLink activeClassName={s.active} to={'/music'}>Music</NavLink></div>
                <div className={s.item}><NavLink activeClassName={s.active} to={'/news'}>News</NavLink></div>
                <div className={s.item}><NavLink activeClassName={s.active} to={'/settings'}>Settings</NavLink></div>
            </div>
            <div className={s.navFriends}>
                <div>Friends</div>
                <div className={s.navFriendsItems}>
                    <div className={s.navFriendsItem}>
                        <div><img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="Friend's avatar"/></div>
                        <div>Dimych</div>
                    </div>
                    <div>
                        <div><img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="Friend's avatar"/></div>
                        <div>Valera</div>
                    </div>
                    <div>
                        <div><img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="Friend's avatar"/></div>
                        <div>Katya</div>
                    </div>
                    <div>
                        <div><img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="Friend's avatar"/></div>
                        <div>Masha</div>
                    </div>
                    <div>
                        <div><img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="Friend's avatar"/></div>
                        <div>Sveta</div>
                    </div>
                    <div>
                        <div><img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt="Friend's avatar"/></div>
                        <div>Viktor</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;