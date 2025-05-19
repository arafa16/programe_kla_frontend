import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    data: any;
    isError: boolean;
    isLoginSuccess: boolean;
    isLogoutSuccess: boolean;
    isGetSuccess: boolean;
    isLoading: boolean;
    message: string | unknown;
}

const initialState : variabel = {
    data: null,
    isError: false,
    isLoginSuccess: false,
    isLogoutSuccess: false,
    isGetSuccess: false,
    isLoading: false,
    message: '',
}


export const loginUser: any = createAsyncThunk("auth/loginUser", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/auth/login', {
            email: datas.email,
            password: datas.password
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error: any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const logoutUser: any = createAsyncThunk("auth/logoutUser", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+'/auth/logout',{
            withCredentials: true,
        });
        return response.data;
    } catch (error: any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getAuth: any = createAsyncThunk("auth/getAuth", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/auth/me',{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error: any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers:{
        resetAuth: (state) => initialState
    },
    extraReducers:(builder) => {
        // get Auth
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoginSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // logout Auth
        builder.addCase(logoutUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLogoutSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(logoutUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // getMe
        builder.addCase(getAuth.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAuth.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isGetSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getAuth.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
        
    }
})

export const {resetAuth} = authSlice.actions;
export default authSlice.reducer;