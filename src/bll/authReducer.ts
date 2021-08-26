import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialStateType = {
    isAuth: boolean
    error: null | string
}

const initialState: InitialStateType = {
    isAuth: false,
    error: null
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthError: (state, action: PayloadAction<string| null>) => {
            state.error = action.payload
        },
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        }
    },
})

export const authReducer = slice.reducer

export const {setAuthError, setIsAuth} = slice.actions
