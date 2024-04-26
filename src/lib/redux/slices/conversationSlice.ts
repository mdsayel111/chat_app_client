import { conversation } from "@/types/commonTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
    currentConversation: conversation
}

const initialState: IAuthState = {
    currentConversation: {} as conversation
};

export const conversationSlice = createSlice({
    name: "currentConversation",
    initialState,
    reducers: {
        setConversationState: (state, action: PayloadAction<conversation>) => {
            state.currentConversation = action.payload;
        },
    },
});

export const { setConversationState } = conversationSlice.actions;
export const conversationReducer = conversationSlice.reducer;