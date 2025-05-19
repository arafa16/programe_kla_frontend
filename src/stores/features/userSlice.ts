import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    data: any;
    isError: boolean;
    isGetSuccess: boolean;
    isCreateSuccess: boolean;
    isUpdateSuccess: boolean;
    isDeleteSuccess: boolean;
    isLoading: boolean;
    message: string;
}

const initialState : variabel = {
    data: null,
    isError: false,
    isGetSuccess: false,
    isCreateSuccess: false,
    isUpdateSuccess: false,
    isDeleteSuccess: false,
    isLoading: false,
    message: '',
}

export const getUserTable : any = createAsyncThunk("getUserTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/user/table?limit=${datas.limit}&page=${datas.page}&search=${datas.search}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});
export const getUserById : any = createAsyncThunk("getUserById", async(uuid : string, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/user/data/${uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});
export const createUser : any = createAsyncThunk("createUser", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/user/data`, datas,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const updateUser : any = createAsyncThunk("updateUser", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.put(import.meta.env.VITE_REACT_APP_API_URL+`/user/data/${datas.uuid}`, datas,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const deleteUser : any = createAsyncThunk("deleteUser", async(uuid : string, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/user/data/${uuid}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers:{
        resetUser: (state) => initialState
    },
    extraReducers: (builder) => {

        //get user table
        builder.addCase(getUserTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getUserTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isGetSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getUserTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //get user by id
        builder.addCase(getUserById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isGetSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getUserById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //create user
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isCreateSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(createUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //update user
        builder.addCase(updateUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isUpdateSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //delete user
        builder.addCase(deleteUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isDeleteSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const { resetUser } = userSlice.actions;
export default userSlice.reducer;


