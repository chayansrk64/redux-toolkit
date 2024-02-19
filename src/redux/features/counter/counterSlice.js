import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
                state.count = state.count + 1;
        },
        decrement: (state) => {
            if(state.count > 0){
                state.count = state.count - 1;
            }
        },
        incrementByValue: (state, actions) => {
            state.count = state.count + actions.payload
        }
    }
})

export const { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;