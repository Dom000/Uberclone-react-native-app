import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    origin:null,
    destination:null,
    travelTimeInformation:null,
}

export const navSlice =createSlice({
    name:"nav",
    initialState,
    reducer:{
        setOrigin:(state,payload)=>{
            state.origin= action.payload
        },
        setDestination:(state,payload)=>{
            state.destination= action.payload
        },
        setTravelTimeinformation:(state,payload)=>{
            state.travelTimeInformation= action.payload
        }
    }
});

export const {setOrigin,setTravelTimeinformation,setDestination}=navSlice.actions;
export const selectOrigin =(state) =>state.nav.origin;
export const selectDestination =(state) =>state.nav.destination;
export const selectTravelTimeinformation =(state) =>state.nav.travelTimeInformation;

export default navSlice.reducer;