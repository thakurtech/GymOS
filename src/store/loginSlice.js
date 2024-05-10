import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loginTime: null,
    isAuthenticated:false,
    role:"",
    userId:"",
    token:""
    
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
        },
        setToken:(state,action)=>{
            state.token=action.payload;
        }

    },
});

export const { setLoginTime,setIsAuthenticated,setUserRole,setUserId,setToken } = loginSlice.actions;
export default loginSlice.reducer;

