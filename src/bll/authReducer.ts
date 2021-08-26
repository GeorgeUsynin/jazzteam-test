import {createSlice} from '@reduxjs/toolkit';

type InitialStateType = {
    isAuth: boolean
}

const initialState: InitialStateType = {
    isAuth: false
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers:{}
})

export const authReducer = slice.reducer
