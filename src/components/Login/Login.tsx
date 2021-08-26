import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import {setAuthError, setIsAuth} from '../../bll/authReducer';
import {useHistory} from 'react-router-dom';
import {PATH} from '../../App';
import cls from './Login.module.css'

export const Login = () => {

    const dispatch = useDispatch()

    const history = useHistory()

    const authError = useSelector<AppRootStateType, null | string>(state => state.auth.error)

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const onChangeUserNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value)
    }
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const onClickLoginButtonHandler = () => {
        if (userName !== 'Admin' && password !== '12345678') {
            dispatch(setAuthError('The user name or password is entered incorrectly'))
        } else {
            dispatch(setIsAuth(true))
            history.push(PATH.PROFILE)
        }
    }

    return (
        <div className={cls.container}>
            <div>
                <label>
                    Login:
                    <input
                        type={'text'}
                        value={userName}
                        onChange={onChangeUserNameHandler}
                        onFocus={() => dispatch(setAuthError(null))}
                    />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input
                        type={'password'}
                        value={password}
                        onChange={onChangePasswordHandler}
                        onFocus={() => dispatch(setAuthError(null))}
                    />
                </label>
            </div>
            {authError && <p>{authError}</p>}
            <div>
                <button
                    disabled={!!authError}
                    onClick={onClickLoginButtonHandler}
                >Login
                </button>
            </div>
        </div>
    )
}
