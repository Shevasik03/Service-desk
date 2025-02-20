import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import Ticket from "./slice/TicketSlice";
import  UserInfo  from "./slice/UserInfoSlice";


export const store = configureStore({
    reducer: {
        Ticket: Ticket,
        UserInfo: UserInfo
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();