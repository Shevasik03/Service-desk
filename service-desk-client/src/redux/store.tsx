import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import Ticket from "./slice/TicketSlice";


export const store = configureStore({
    reducer: {
        Ticket: Ticket,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();