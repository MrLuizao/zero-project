import { ProfileInfoI } from "src/app/interfaces/profile-info.interface";
import { createReducer, on } from '@ngrx/store';
import * as profileActions from './profile.actions';


export interface State {
    info: any;
}
export const initialState: State = {
    info: null,
};

export const featureKey = 'profile';


export const reducer = createReducer(
    initialState,

    on( profileActions.setProfileInfoAction, (state, {payload}) => ({ 
        ...state, 
        info: payload
    })),
)

export const profileReducer = (state: any, action: any) => reducer(state, action);

