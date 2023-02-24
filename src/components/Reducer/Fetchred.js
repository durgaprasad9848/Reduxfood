import { createSlice } from "@reduxjs/toolkit";
 

const Fetchred = createSlice({
    name:'fetchstatus',
    initialState: {
        status:[],
        isVisible:false,
    },
    reducers:{
    changestatus : (state,action)=>{
        state.status = action.payload;
        console.log(state.status);
        state.isVisible=true;
    },
},
});


export const {changestatus} = Fetchred.actions;
export default Fetchred.reducer;