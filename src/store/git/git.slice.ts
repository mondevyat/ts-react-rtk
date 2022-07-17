import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const LS_FAV_KEY = 'rfk';

interface GitState {
    favourites: string[]
};

const initialState: GitState = {
    favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
};

export const gitSlice = createSlice({
    name: 'git',
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<string>) {
            state.favourites.push(action.payload);
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
        },
        removeFavourite(state, action: PayloadAction<string>) {
            state.favourites = state.favourites.filter(f => f !== action.payload);
        }
    }
});

export const gitActions = gitSlice.actions;
export const gitReducer = gitSlice.reducer;