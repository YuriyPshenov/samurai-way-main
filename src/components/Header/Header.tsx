import React from 'react';
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.headerContainer}>
            <div className={s.header}>
                <div className={s.headerSocialLogo}>
                    <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="logo"/>
                    <div>SOCIAL NETWORK</div>
                </div>
                <div className={s.headerSearch}>
                    <input type="text" placeholder="Search here"/>
                </div>
                <div className={s.headerUserLog}>
                    <img src="https://cdn-icons-png.flaticon.com/512/147/147133.png" alt="user's avatar"/>
                    <div>Ricardo Milos</div>
                </div>
            </div>
        </header>
    );
};