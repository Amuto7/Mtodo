import  {createSlice} from "@reduxjs/toolkit";

const initialState = {
    windowWidth : 0,
    sizeWindow: false,
    updatewin:false
  }

export const  windowWidthSlice = createSlice({
    name:'windowWidth',
    initialState,
    reducers:{
        SetscreenSize:(state,{payload})=> {
            state.windowWidth = payload
        },
        sizeOfWindow:(state,{payload})=>{
            state.sizeWindow = payload
        },
        updatewind:(state,{payload})=>{
            state.updatewin = payload
        }
    }
})

export const {SetscreenSize,sizeOfWindow,updatewind} = windowWidthSlice.actions 

export default windowWidthSlice.reducer