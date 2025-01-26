import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type AddTicketProps = {
    id: number,
    date: string,
    title: string,
    category: string,
    subcategory?: string,
    description?: string,
    status: string,
    client: string,
    executant?: string,
    timer?: string,
    solution?: string,
}

export interface AddTicketSliceState {
    tickets: AddTicketProps[];
    id: number,
}

const initialState: AddTicketSliceState = {
    tickets: [],
    id: 1,
}

export const AddTicket = createSlice({
    name: 'addTicket',
    initialState,
    reducers: {
        addTicket: (state, action: PayloadAction<AddTicketProps>) => {
            state.tickets.push({
                ...action.payload,
                date: new Date().toLocaleString(),
                id: state.id
            })

            state.id += 1

            console.log(state.tickets)
        }
    }
})

export const { addTicket } = AddTicket.actions;
export const selectAddTicket = (state: RootState) => state.AddTicket;

export default AddTicket.reducer