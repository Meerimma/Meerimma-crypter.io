import React from 'react';
import './header.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
             <nav className="header__nav">
                 <ul className="header__list">
                     <li className="header__item">About </li>
                     <li className="header__item">Menu </li>
                     <li className="header__item">Info </li>
                     <li className="header__item"> Booking </li>
                 </ul>
                 <h1 className="header__title"> LATTE CAFE </h1>
                 <ul className="header__list">
                     <li className="header__item header__item-icon"><HiOutlineMail/></li>
                     <li className="header__item header__item-icon"><FaFacebook/></li>
                     <li className="header__item header__item-icon"><FaInstagram/></li>


                 </ul>
             </nav>
            </div>
        </header>
    );
};

export default Header;