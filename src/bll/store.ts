import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {profileReducer} from './profileReducer';
import {authReducer} from './authReducer';


const rootReducer = combineReducers({
    profile: profileReducer,
    auth: authReducer
})

const store = configureStore({
    reducer: rootReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatchType = typeof store.dispatch

export default store
