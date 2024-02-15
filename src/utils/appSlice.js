import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        open:true,
    },
    reducers:{
        toggleopen:(state)=>{
            state.open=!state.open;
        }
    }
});

export const {toggleopen}=appSlice.actions;
export default appSlice.reducer;