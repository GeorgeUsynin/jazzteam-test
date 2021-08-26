import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialStateType = {
    userName: string | null

}

const initialState: InitialStateType = {
    userName: null
}

const slice = createSlice({
    name: "profile",
    initialState,
    reducers:{
        getUserName: (state, action: PayloadAction<string| null>) => {
            state.userName = action.payload
        },
    }
})

export const {getUserName} = slice.actions

export const profileReducer = slice.reducer
