import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface ICounterState {
    counter: number;
    showCounter: boolean;
}


const initialCounterState: ICounterState = { counter : 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState ,
    reducers: {
        increment: (state) =>{
            state.counter++;
        },
        decrement: (state) =>{
            state.counter--;
        },
        increase: (state, action: PayloadAction<number>) => {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
});

export default counterSlice;