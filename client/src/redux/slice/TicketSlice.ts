import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";
import { arrayTicketsSetting } from "./ArraysDB";

export const fetchAuthUser = async () => {
    try {
        const { data } = await axios.get('http://localhost:3000/api/userinfo', { withCredentials: true })
        return data == undefined ? "Name" : data
    } catch (err) {
      console.log(err)
    }
}
  
export const fetchTickets = async () => {
    try {
        const {data} = await axios.get(`https://679bba7033d316846324edac.mockapi.io/service-desk/tickets`)
        console.log(data)
        return data
    } catch(err) {
        console.log(err)
    }
}

export type AddTicketProps = {
    id?: number,
    createDate?: {
        readDate: string,
        isoDate: string,
    },
    title?: string,
    category?: string,
    subCategory?: string,
    description?: string,
    status?: string,
    client?: string,
    executant?: string,
    timer?: string,
    solution?: string,
    nameMachine?: string,
    objDateStart?: {
        dateStart: string ,
        timeStart: string ,
        isoDateTime?: string ,
    },
    objDateEnd?:{
        dateEnd: string,
        timeEnd: string,
        isoDateTime?: string,
    },
    doneTicket?: boolean,
    approveTicket?: boolean,
}

export type AuthUserProps = {
    username: string,
    fullName: string,
    email: string,
}

export type CreateTicketProps = {
    category: string | undefined,
    subcategory: string[] | undefined,
}

export interface TicketsSliceState {
    temporaryItem: CreateTicketProps,
    isVisibleCreateTicket: boolean,
    isVisibleAcceptanceTicket: boolean,
    tickets: AddTicketProps[],
    doneTickets: AddTicketProps[],
    temporaryTicketIndex: number | undefined,
    id: number,
    authUser: AuthUserProps,
}

const initialState: TicketsSliceState = {
    temporaryItem: {
        category: "",
        subcategory: [],
    },
    tickets: [],
    doneTickets: [],
    temporaryTicketIndex: 0,
    id: 1,
    isVisibleCreateTicket: false,
    isVisibleAcceptanceTicket: false,
    authUser: {
        username: "",
        fullName: "",
        email: ""
    }
}

export const Ticket = createSlice({
    name: 'Ticket',
    initialState,
    reducers: {
        setTickets: (state, action: PayloadAction<AddTicketProps[]>) => {
            state.tickets = action.payload
            const lenght = state.tickets.length

            if (lenght > 0) {
                const id = (state.tickets[lenght - 1].id)
                state.id = Number(id) + 1
            }
        },
        setAuthUser: (state, action: PayloadAction<AuthUserProps>) => {
            state.authUser = action.payload
        },
        onVisibleCreateTicket: (state, action: PayloadAction<CreateTicketProps>) => {
            const findCategory = arrayTicketsSetting.find((item) => item.category === action.payload.category );
            console.log(findCategory)
            
            state.temporaryItem.category = findCategory?.category
            state.temporaryItem.subcategory = findCategory?.subcategory

            
            console.log(state.temporaryItem.category)
            state.isVisibleCreateTicket = !state.isVisibleCreateTicket
        },
        onVisibleTicketAcceptance: (state, action: PayloadAction<AddTicketProps>) => {
            state.temporaryTicketIndex = state.tickets.findIndex((item) => item.id === action.payload.id)
            
            state.isVisibleAcceptanceTicket = !state.isVisibleAcceptanceTicket
        },
        onHidenTicketCard: (state) => {
            state.isVisibleCreateTicket = false;
            state.isVisibleAcceptanceTicket = false;
        },
        addTicket: (state, action: PayloadAction<AddTicketProps>) => {
            const newTicket = {
                ...action.payload,
                    createDate: {
                        readDate: new Date().toLocaleString(),
                        isoDate: new Date().toISOString(),
                    },
                    id: state.id,
                    status: "Нова",
                    executant: "",
                    solution: "",
                    objDateStart: {
                        dateStart:   "",
                        timeStart:   "",
                        isoDateTime:   "",
                    },
                    objDateEnd: {
                        dateEnd:  "",
                        timeEnd:  "",
                        isoDateTime:  "",
                    },
                doneTicket: false,
                approveTicket: false,
            }

            state.tickets.push(newTicket)

            try {
                axios.post('https://679bba7033d316846324edac.mockapi.io/service-desk/tickets', newTicket)
                console.log(newTicket)
            } catch (err) {
                console.log(err)
            }
            state.id += 1

        },
        uploadTicket: (state, action: PayloadAction<AddTicketProps>) => {
            const findTicket = state.tickets.find((item) => item.id === action.payload.id)

            const getDateTimeToIso = (date: string, time: string) => {
                if ((date || time) === '') {
                    return ''
                } else {
                    const dateTimeString = `${date}T${time}:00`
                    const isoDateTimeString = new Date(dateTimeString).toISOString()
                    return isoDateTimeString
                }    
            } 
            
            if (!findTicket) return;
            
            const postTicket = {
                ...action.payload,
                status: findTicket.status !== "Нова" ? action.payload.status : "В роботі",
                objDateStart: {
                    ...action.payload.objDateStart,
                    isoDateTime: `${
                        getDateTimeToIso( `${action.payload.objDateStart?.dateStart}`, `${action.payload.objDateStart?.timeStart}`)
                    }`
                },
                objDateEnd: {
                    ...action.payload.objDateEnd,
                    isoDateTime: `${
                        getDateTimeToIso( `${action.payload.objDateEnd?.dateEnd}`, `${action.payload.objDateEnd?.timeEnd}`)
                    }`
                }
            }
    
            Object.assign(findTicket, postTicket)

            try {
                axios.put(`https://679bba7033d316846324edac.mockapi.io/service-desk/tickets/${findTicket?.id}`, postTicket)
                console.log(findTicket)
            } catch (err) {
                console.log(err)
            }
                
        },
        rejectedTicket:(state, action) => {
            const findTicket = state.tickets.find((item) => item.id === action.payload.id)

            if (findTicket) {
                findTicket.doneTicket = true
                findTicket.status = "Відхилена"
                findTicket.solution = action.payload.solution
            }
            try {
                axios.put(`https://679bba7033d316846324edac.mockapi.io/service-desk/tickets/${findTicket?.id}`, findTicket)
                console.log(findTicket)
            } catch (err) {
                console.log(err)
            }
        },
        doneTicket: (state, action) => {
            const findTicket = state.tickets.find((item) => item.id === action.payload.id)

            if (!findTicket) return;

            const postTicket = {
                ...action.payload,
                status: 'Виконано',
                doteTicket: true,
            }

            Object.assign(findTicket, postTicket)

            try {
                axios.put(`https://679bba7033d316846324edac.mockapi.io/service-desk/tickets/${findTicket?.id}`, postTicket)
                console.log(findTicket)
            } catch (err) {
                console.log(err)
            }
        }
    }
})

export const {setTickets, setAuthUser, onVisibleCreateTicket, onVisibleTicketAcceptance, onHidenTicketCard , addTicket, uploadTicket, rejectedTicket, doneTicket } = Ticket.actions
export const selectTicket = (state: RootState) => state.Ticket;

export default Ticket.reducer;