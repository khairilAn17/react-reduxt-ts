
import { createSlice } from '@reduxjs/toolkit';

export interface IAuthState {
    isAuthentication: boolean;
}

const initiateAuthState: IAuthState = {
    isAuthentication: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initiateAuthState,
    reducers: {
        login: (state) => {
            state.isAuthentication = true;
        },
        logout: (state) => {
            state.isAuthentication = false;
        }
    }
})

export default authSlice