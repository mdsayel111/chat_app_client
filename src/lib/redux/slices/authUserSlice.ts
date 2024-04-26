import { user } from "@/types/commonTypes";
import { createSlice } from "@reduxjs/toolkit";

export interface authUserState {
    authUser: user | null,
}

const initialState: authUserState = {
    authUser: null,
};

// export const fechAuthUser = createAsyncThunk("user/authUser", async () => {
//     return axiosInstance.get("/user").then(data => {
//         // console.log(data)
//         return null
//     })
// })

export const authUserSlice = createSlice({
    name: "authUser",
    initialState,
    reducers: {
        setAuthUser: (state, action: { payload: user | null }) => {
            state.authUser = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fechAuthUser.fulfilled, (state, action) => {
    //         state.loading = false
    //         state.authUser = action.payload
    //     })
    // }
});

export const { setAuthUser } = authUserSlice.actions;
export const authUserReducer = authUserSlice.reducer;