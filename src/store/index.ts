import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { gitApi } from "./git/git.api";
import { gitReducer } from "./git/git.slice";

export const store = configureStore({
    reducer: {
        [gitApi.reducerPath]: gitApi.reducer,
        git: gitReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(gitApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
