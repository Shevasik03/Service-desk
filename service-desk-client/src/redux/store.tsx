import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import CreateTickets from "./slice/CreateTicketsSlice";
import AddTicket  from "./slice/AddTicketSlice";

export const store = configureStore({
    reducer: {
        CreateTickets: CreateTickets,
        AddTicket: AddTicket,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();