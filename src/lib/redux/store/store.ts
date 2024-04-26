import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authUserReducer, setAuthUser } from "../slices/authUserSlice";
import { conversationReducer } from "../slices/conversationSlice";

export const store = configureStore({
    reducer: { currentConversation: conversationReducer, authUser: authUserReducer },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({ serializableCheck: false }),
});
// typeof window !== "undefined" ? store.dispatch(setAuthUser((JSON.parse(localStorage.getItem("user") || "{}")) || null)) : ""
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;