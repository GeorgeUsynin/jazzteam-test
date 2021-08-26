import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../App';
import cls from './Header.module.css'
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';

export const Header = () => {

    const userName = useSelector<AppRootStateType, string | null>(state=>state.profile.userName)

    return (
        <header className={cls.container}>
            <nav className={cls.navWrapper}>
                <ul className={cls.navContainer}>
                    <li><NavLink replace exact to={PATH.HOME} activeClassName={cls.active}>Home</NavLink></li>
                    <li><NavLink replace exact to={PATH.INFO} activeClassName={cls.active}>Info</NavLink></li>
                    <li><NavLink replace exact to={PATH.PROFILE} activeClassName={cls.active}>Profile</NavLink></li>
                    <li><NavLink replace exact to={PATH.LOGIN} activeClassName={cls.active}>Login</NavLink></li>
                </ul>
                <div>
                    {userName && <p className={cls.userNameGreeting}>Welcome dear <span>{userName}</span></p>}
                </div>
            </nav>
        </header>
    )
}
