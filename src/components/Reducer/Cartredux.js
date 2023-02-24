import { createSlice } from '@reduxjs/toolkit';

const cartRedux =createSlice({
    name: 'Cartreducer',
    initialState: {
        showCart : true,
    },
    reducers:
    {
    change: (state)=> {
        state.showCart = !state.showCart;
        console.log(state.showCart);

    },
},

})

export const { change } = cartRedux.actions;

export default cartRedux.reducer;



