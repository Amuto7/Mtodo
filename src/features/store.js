import { configureStore } from "@reduxjs/toolkit";
import  UserstaskSlice  from "./Userstask/UserstaskSlice";
import windowWidthSlice from './windowWidth/windowWidthSlice'

export const store = configureStore({
    reducer: {
        windowWidth:windowWidthSlice,
        users:UserstaskSlice,
    },
  })