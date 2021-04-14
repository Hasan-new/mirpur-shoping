import React from 'react';
import logo from '../../../src/images/logos.PNG';
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt=""/>
            <nav>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </nav>
        </div>
    );
};

export default Header;