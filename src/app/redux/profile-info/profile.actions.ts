import { Action, createAction, props } from "@ngrx/store";
import { ProfileInfoI } from "src/app/interfaces/profile-info.interface";

export const enum ProfileInfoActionTypes {
    SET_PROFILE_INFO = '[PROFILE] set info profile'
}

export const setProfileInfoAction = createAction(
    ProfileInfoActionTypes.SET_PROFILE_INFO,
    props<{ payload: ProfileInfoI }>()
);