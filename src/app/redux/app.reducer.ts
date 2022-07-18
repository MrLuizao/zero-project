
import { ActionReducerMap } from "@ngrx/store";
import * as profileReducer from "./profile-info/profile.reducer";

export interface AppState {
    profile: profileReducer.State
}

export const appReducers: ActionReducerMap<AppState> = {
   
    profile: profileReducer.profileReducer
}