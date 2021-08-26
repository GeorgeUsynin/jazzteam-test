import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import {Redirect} from 'react-router-dom';
import {PATH} from '../../App';

export const Profile = () => {

    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)

    if (!isAuth) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div>
            PROFILE
        </div>
    )
}
