import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../App';
import cls from './Header.module.css'

export const Header = () => {
    return (
        <header className={cls.container}>
            <nav>
                <ul className={cls.navContainer}>
                    <li><NavLink replace exact to={PATH.HOME} activeClassName={cls.active}>Home</NavLink></li>
                    <li><NavLink exact to={PATH.INFO} activeClassName={cls.active}>Info</NavLink></li>
                    <li><NavLink exact to={PATH.PROFILE} activeClassName={cls.active}>Profile</NavLink></li>
                    <li><NavLink exact to={PATH.LOGIN} activeClassName={cls.active}>Login</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
