import React from 'react';
import Logo from '../../assets/usf.png';
import './Header.css';

function Header () {
    return (
        <section className="header">
            <section className="header-logo">
                <img src={Logo} alt="logo" />
            </section>
            <section className="header-university">
                U N I V E R S I T Y  of
            </section>
            <section className="header-south-florida">
                SOUTH FLORIDA
            </section>
        </section>
    )
}

export default Header;