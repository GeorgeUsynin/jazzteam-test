import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import {Redirect} from 'react-router-dom';
import {PATH} from '../../App';
import avatar from '../../images/avatar.png'
import cls from './Profile.module.css'

export const Profile = () => {

    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const userName = useSelector<AppRootStateType, string | null>(state => state.profile.userName)

    if (!isAuth) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div className={cls.profileContainer}>
            <div className={cls.imgContainer}>
                <img src={avatar} alt=""/>
            </div>
            <div className={cls.aboutContainer}>
                {<p>Name: {userName}</p>}
                <p>Age: 30</p>
                <p>About myself:</p>
                <p>
                    I’m usually emotional and active person. My life is very diverse. I think that I have a
                    charitable nature, because I always help people. I’m usually calm, but sometimes I can lose my
                    temper and become either angry or sad. I like to laugh and joke. I have got a sense of humor. I’m
                    hard-working and ambitious person. I set high goals for myself and I work hard to reach them. I’m
                    sociable, so I have got a lot of friends. I appreciate people’s honesty, frankness and politeness. I
                    don’t like when people are rude and aggressive.
                </p>
            </div>
        </div>
    )
}
