import userprofile from './../../img/icons/profile.png'
import newLogoImg from './../../img/logo/NewLogo4.png'
import cartIcon from './../../img/icons/cartIcon.png'
import { Link } from 'react-router-dom'
import { logout, selectIsAuth } from "../../redux/slices/auth";
import { useDispatch, useSelector } from 'react-redux'
import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import { fetchAuthMe } from "../../redux/slices/auth";

import './header.css'



function Header() {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    const onClickLogout = () => {
        if (window.confirm('Вы уверены, что хотите выйти?')) {
            dispatch(logout());
            window.localStorage.removeItem('token', '');
        }

    };


    return(
        <>
        <header className='header'>
            <div className="container2">
                <div className="header_row">
                   
                        <div className="header__logo">
                            
                           <img src={newLogoImg} alt="Logo" />
                           <Link to='/'> <span><a>AC</a>CORD</span></Link>
                            
                        </div>
                        
                    <nav className="header_nav">
                        <ul >
                            <li><a href="#!">НОВИНКИ</a></li>
                            <li><Link to="/catalog">КАТАЛОГ</Link></li>
                            <li><Link to='/aboutUs'>МАГАЗИНЫ</Link></li>
                            
                        </ul>
                    </nav>
                    
                    <div  className='header_nav_right'>
                 
                        <ul>
                        {isAuth ? (
                            <>
                             <Link to="/cart" >
                        <button className='trash_can'>
                            Корзина
                            <img src={cartIcon} alt='can'/>
                        </button>
                        </Link>
                        <div className='user_profile'>
                            <button onClick={onClickLogout}>
                                <Link to="/" >
                                <button>
                                    Выйти
                                </button>
                                </Link>
                            </button>
                            <Link to='/profile'>
                            <img src={userprofile} alt='can'/></Link>
                        </div>
                        </>
                        ) : (
                        <>
                        
                        <button className='trash_can'>
                            <Link to="/cart" >
                            Корзина </Link>
                            <img src={cartIcon} alt='can'/>
                        </button>
                        
                     
                        <div className='user_profile'>
                            <button><Link to="/login" >Войти</Link></button>
                            <img src={userprofile} alt='can'/>
                        </div>
                        </>
                        )}
                      </ul>
                    </div>
                </div>
            </div>
        </header>
        </>
)
}

export default Header;