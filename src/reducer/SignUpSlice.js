import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { myAxios } from "../services/helper";

export const signUp = createAsyncThunk(
    'signUp',
    async (userInput) => {
        const response = await myAxios.post('/student/AddStudent', userInput)
        return response?.data
    }
)
const initialState = {
    isLoading: false,
    error: false,
    user: {}
}
const SignUpSlice = createSlice({
    name: "userSignUp",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state) => {
            state.isLoading = true
        }).addCase(signUp.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.user = payload
            state.error = false
        }).addCase(signUp.rejected, (state) => {
            state.error = false
        })
    }

})