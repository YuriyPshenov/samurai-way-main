import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";
import {SitebarType} from "../../redux/State";

type NavbarPropsType = {
    sitebar: SitebarType
}

export const Navbar = (props: NavbarPropsType) => {

    const {friends} = props.sitebar

    const friendsElements = friends.map(f => <Friend key={f.id} id={f.id} name={f.name}/>)

    return (
        <nav className={s.navigation}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div>
                <h3>Friends</h3>
                <div className={s.friends}>
                    {friendsElements}
                </div>
            </div>
        </nav>
);
};