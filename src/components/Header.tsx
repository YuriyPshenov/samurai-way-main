import React from 'react';
import './Header.module.css';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png" alt={'logo'}/>
        </header>
    )
}

export default Header;