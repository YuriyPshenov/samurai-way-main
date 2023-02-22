import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.headerBack}>
            <header className={s.header}>
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-512.png" alt="logo"/>
            </header>
        </div>
    );
};

export default Header;