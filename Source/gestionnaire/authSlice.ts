import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface AuthState {
    isFirsLaunch:boolean;
    isLoggedIn:boolean;
    user:any | undefined;
}

const initialState:AuthState={
    isFirsLaunch:true,
    isLoggedIn:false,
    user:undefined,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        completeOnboarding:(state) => {
            state.isFirsLaunch = false;
        },
        login:(state, action:PayloadAction<any>) => {
            state.isLoggedIn = true,
            state.user = action.payload;
        },
        logout:(state) => {
            state.isLoggedIn = false,
            state.user = undefined            
        }
    }
});

export const {completeOnboarding, login, logout} = authSlice.actions
export default authSlice.reducer