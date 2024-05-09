import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loginTime: null,
    isAuthenticated:false
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginTime: (state, action) => {
            state.loginTime = action.payload;
        },
        setIsAuthenticated:(state,action)=>{
            state.isAuthenticated=action.payload;
        },
        setUserRole:(state,action)=>{
            state.role=action.payload;
        },
        setUserId:(state,action)=>{
            state.userId=action.payload;
        }

    },
});

export const { setLoginTime,setIsAuthenticated,setUserRole,setUserId } = loginSlice.actions;
export default loginSlice.reducer;

