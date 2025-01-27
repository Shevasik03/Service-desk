import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";


export interface TicketsSettingProps {
    src: string;
    category: string;
    subcategory: string[];
    onClick?: () => void;
}

export const arrayTicketsSetting: Array<TicketsSettingProps> = [
    {src:'/src/assets/img/icons/printer.svg', category: 'Принтер', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    { src: '/src/assets/img/icons/computer.svg', category: "Комп'ютер", subcategory: ['Вебкамера', 'Звук', 'Мережа', 'Монітор', 'Мишка/Клавіатура', 'Налаштування ПК, ноутбукаб моноблока']},
    {src:'/src/assets/img/icons/accessRights.svg', category: 'Обліковий запис', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/erp.svg', category: 'Термінал/1С', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/cloudStorage.svg', category: 'Хмарне сховище', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/cart.svg', category: 'Замовлення техніки', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/workplaceRemote.svg', category: 'Встановлення/Перенесення робочого місця', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/programInstalation.svg', category: 'Встановлення ПЗ', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/permit.svg', category: 'СКД', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/videoSurveillance.svg', category: 'Відеонагляд', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/other.svg', category: 'Інше', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
]

export type AddTicketProps = {
    id?: number,
    date?: string,
    title: string,
    category?: string,
    subcategory?: string,
    description?: string,
    status: string,
    client: string,
    executant?: string,
    timer?: string,
    solution?: string,
}


export type CreateTicketProps = {
    category: string | undefined,
    subcategory: string[] | undefined,
}

export interface TicketsSliceState {
    temporaryItem: CreateTicketProps,
    isVisible: boolean;
    tickets: AddTicketProps[];
    id: number,
}

const initialState: TicketsSliceState = {
    temporaryItem: {
        category: '',
        subcategory: [],
    },
    tickets: [],
    id: 1,
    isVisible: false,
}

export const Ticket = createSlice({
    name: 'createTicket',
    initialState,
    reducers: {
        openCreateTicket: (state, action: PayloadAction<CreateTicketProps>) => {
            const findCategory = arrayTicketsSetting.find((item) => item.category === action.payload.category );
            console.log(findCategory)
            
            state.temporaryItem.category = findCategory?.category
            state.temporaryItem.subcategory = findCategory?.subcategory

            
            console.log(state.temporaryItem.category)
        },
        isVisibleTicket: (state) => {
            state.isVisible = !state.isVisible
        },
        addTicket: (state, action: PayloadAction<AddTicketProps>) => {
            console.log(state.tickets)
            state.tickets.push({
                ...action.payload,
                date: new Date().toLocaleString(),
                id: state.id,
                executant: '',
                solution: '',
            })

            state.id += 1

            console.log(action.payload)
            console.log(state.tickets)
            console.log(state.id)
        },
    }
})

export const {openCreateTicket, isVisibleTicket, addTicket } = Ticket.actions
export const selectTicket = (state: RootState) => state.Ticket;

export default Ticket.reducer;