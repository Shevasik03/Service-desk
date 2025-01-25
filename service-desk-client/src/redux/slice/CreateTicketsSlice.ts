import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface TicketsSettingProps {
    src: string;
    category: string;
    subcategory: string[] | undefined;
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

export type CreateTicketProps = {
    category: string | undefined,
    subcategory: string[] | undefined,
}

export interface CreateTicketsSliceState {
    items: CreateTicketProps,
    isVisible: boolean;
}

const initialState: CreateTicketsSliceState = {
    items: {
        category: '',
        subcategory: [],
    },
    isVisible: false,
}

export const CreateTickets = createSlice({
    name: 'createTicket',
    initialState,
    reducers: {
        openCreateTicket: (state, action: PayloadAction<CreateTicketProps>) => {
            const findCategory = arrayTicketsSetting.find((item) => item.category === action.payload.category );
            console.log(findCategory)
            
            state.items.category = findCategory?.category
            state.items.subcategory = findCategory?.subcategory

            
            console.log(state.items.category)
        },
        isVisibleTicket: (state) => {
            state.isVisible = !state.isVisible
        }
    }
})

export const {openCreateTicket, isVisibleTicket } = CreateTickets.actions
export const selectCreateTickets = (state: RootState) => state.CreateTickets;

export default CreateTickets.reducer;