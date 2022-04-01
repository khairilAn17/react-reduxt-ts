import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './auth';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})

export const { increment, decrement, increase, toggleCounter } = counterSlice.actions;

export const { login, logout } = authSlice.actions;

export default store;


export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;