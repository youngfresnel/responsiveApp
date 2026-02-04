import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface AuthState {
  isAuthIn: any;
//   isAuthenticated: any;
    isFirsLaunch:boolean;
    isLoggedIn:boolean;
    user: null | { id: string; email: string };
     nav:any | boolean
}

const initialState:AuthState={
    isFirsLaunch:true,
    isLoggedIn:false,
    isAuthIn:false,
    user:null,
    nav:undefined
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        completeOnboarding:(state) => {
            state.isFirsLaunch = false;
        },
        completeAuth:(state) => {
            state.isAuthIn = true;
        },
        logout:(state) => {
            state.isLoggedIn = false,
            state.user = null           
        }
    },
});
   const appSlice = createSlice ({
        name:'app',
        initialState,
        reducers:{
            completeHouse:(states) => {
                states.nav = false
            }
        }
    })

export const {completeOnboarding,  completeAuth} = authSlice.actions
export default authSlice.reducer