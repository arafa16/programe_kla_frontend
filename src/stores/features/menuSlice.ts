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


export const getMenu : any = createAsyncThunk("getMenu", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/menu/data`,{
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

export const getMenuTable : any = createAsyncThunk("getMenuTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/menu/table?limit=${datas.limit}&page=${datas.page}&search=${datas.search}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
}
);

export const getMenuById : any = createAsyncThunk("getMenuById", async(uuid : string, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/menu/data/${uuid}`,{
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

export const createMenu : any = createAsyncThunk("createMenu", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/menu/data`, datas.formData ,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        console.log(response.data, 'response.data');
        return response.data;
    } catch (error : any) {
        console.log(error, 'error');
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const updateMenu : any = createAsyncThunk("updateMenu", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/menu/data/${datas.uuid}`, datas.formData,{
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

export const deleteMenu : any = createAsyncThunk("deleteMenu", async(uuid : string, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/menu/data/${uuid}`,{
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

export const menuSlice = createSlice({
    name: "Menu",
    initialState,
    reducers:{
        resetMenu: (state) => initialState
    },
    extraReducers:(builder) => {
        // get Menu
        builder.addCase(getMenu.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMenu.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isGetSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getMenu.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get Menu Table
        builder.addCase(getMenuTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMenuTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isGetSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getMenuTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get Menu by id
        builder.addCase(getMenuById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMenuById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isGetSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getMenuById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create Menu 
        builder.addCase(createMenu.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createMenu.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isCreateSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createMenu.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // update Menu 
        builder.addCase(updateMenu.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateMenu.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isUpdateSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updateMenu.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // delete Menu 
        builder.addCase(deleteMenu.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteMenu.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isDeleteSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deleteMenu.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const {resetMenu} = menuSlice.actions;
export default menuSlice.reducer;