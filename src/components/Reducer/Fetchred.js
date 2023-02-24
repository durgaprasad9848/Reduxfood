import { createSlice } from "@reduxjs/toolkit";
 

const Fetchred = createSlice({
    name:'fetchstatus',
    initialState: {
        status:[],
    },
    reducers:{
    changestatus : (state,action)=>{
        state.status = action.payload;
        console.log(state.status);
    },
},
});


export const {changestatus} = Fetchred.actions;
export default Fetchred.reducer;