import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import  {initialState, stateName} from './initialState';

const nameSlice =  createSlice({
    name: 'nameUpdate',
    initialState,
    reducers: {
        updateFirstname(state, action: PayloadAction<string>) {
            state.firstname = action.payload;
        },
        updateLastname(state, action: PayloadAction<string>) {
            state.lastname = action.payload;
        },
        updateLoader(state, action: PayloadAction<boolean>) {
            state.loader = action.payload;
        },
    },
});

export const { updateFirstname, updateLastname, updateLoader } = nameSlice.actions;

export default nameSlice.reducer;

export const selectFirstname = (state: stateName): string => state.firstname;
export const selectLastname = (state: stateName): string => state.lastname;
export const selectLoader = (state: stateName): boolean => state.loader;
