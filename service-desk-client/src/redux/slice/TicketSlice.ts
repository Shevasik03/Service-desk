import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";


export interface TicketsSettingProps {
    src: string;
    category: string;
    subcategory: string[];
    onClick?: () => void;
}

export type tableRowProps = {
        user: string;
        employeePosition: string;
        mail: string;
        key: number
}

export const arrayStatus: Array<string> = ["В роботі", "В черзі","Пауза", "Чорновик"]

export const arrayUsersInformation = [
    {user: 'Дулєнцов Денис Михайлович',employeePosition: 'Заступник директора з управління даними та інформаційними технологіями',mail: 'denys.dulientsov@nemiroff.pro'},
    {user: 'Никифоров Микола Олександрович',employeePosition: 'Молодший адміністратор системи',mail: 'mykola.nykyforov@nemiroff.pro'},
    {user: 'Федорчук Костянтин Сергійович',employeePosition: 'Менеджер з керування даними',mail: 'kostiantyn.fedorchuk@nemiroff.pro'},
    {user: 'Ейсмонт Віктор Володимирович',employeePosition: 'Інженер-програміст',mail: 'viktor.eismont@nemiroff.pro'},
    {user: 'Борушенко Ірина Геннадіївна',employeePosition: 'Аналітик бізнесу',mail: 'iryna.borushenko@nemiroff.pro'},
    {user: 'Кашуба Сергій Дмитрович',employeePosition: 'Адміністратор системи',mail: 'serhii.kashuba@nemiroff.pro'},
    {user: "Прімак Дар'я Павлівна",employeePosition: 'Начальник відділу розробки програмного забезпечення',mail: 'daria.primak@nemiroff.pro'},
    {user: 'Ладуб Олександр Васильович',employeePosition: 'Молодший адміністратор системи',mail: 'oleksandr.ladub@nemiroff.pro'},
    {user: 'Кравець Юрій Васильович',employeePosition: 'Провідний фахівець зі звітності та аналітики',mail: 'yurii.kravets@nemiroff.pro'},
    {user: 'Ковальов Олександр Васильович',employeePosition: 'Головний адміністратор системи',mail: 'aleksandr.kovalev@nemiroff.pro'},
    {user: 'Бурковська Єлизавета Сергіївна',employeePosition: 'Адміністратор системи',mail: 'yelyzaveta.burkovska@nemiroff.pro'},
    {user: 'Оскін Дмитро Данилович',employeePosition: 'Адміністратор системи',mail: 'dmytro.oskin@nemiroff.pro'},
    {user: 'Гоцман Сергій Сергійович',employeePosition: 'Начальник відділу підтримки та розвитку інфраструктури',mail: 'sergey.gotsman@nemiroff.pro'},
    {user: 'Поліновський Олег Анатолійович',employeePosition: 'Провідний інженер-програміст',mail: 'oleh.polinovskyi@nemiroff.pro'},
    {user: 'Малиш Любов Іванівна',employeePosition: 'Фахівець з підтримки користувачів облікової системи',mail: 'l.malysh@nemiroff.pro'},
    {user: 'Василишина Галина Володимирівна',employeePosition: 'Аналітик бізнесу',mail: 'halyna.vasylyshyna@nemiroff.pro'},
    {user: 'Зелінський Віталій Вячеславович',employeePosition: 'Адміністратор системи',mail: 'vitalijj.zelinskijj@nemiroff.pro'},
    {user: 'Балашов Максим Олександрович',employeePosition: 'Старший адміністратор системи',mail: 'maksim.balashov@nemiroff.pro'},
    {user: 'Варенич Олександр Анатолійович',employeePosition: 'Керівник відділу аналізу даних та звітності',mail: 'oleksandr.varenych@nemiroff.pro'},
    {user: 'Тараненко Катерина Олександрівна',employeePosition: 'Молодший інженер-програміст',mail: 'kateryna.taranenko@nemiroff.pro'},
    {user: 'Міхєєв Андрій Володимирович',employeePosition: 'Адміністратор системи',mail: 'andrii.mikhieiev@nemiroff.pro'},
    {user: 'Шевчук Олександр Валерійович',employeePosition: 'Молодший фахівець',mail: 'oleksandr.shevchuk@nemiroff.pro'},
    {user: 'Лучко Костянтин Сергійович',employeePosition: 'Адміністратор системи',mail: 'kostiantyn.luchko@nemiroff.pro'},
    {user: 'Хіміч Сергій Іванович',employeePosition: 'Інженер-програміст',mail: 'sergijj.himich@nemiroff.pro'},
]

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
    createDate?: {
        readDate: string,
        isoDate: string,
    },
    title?: string,
    category?: string,
    subcategory?: string,
    description?: string,
    status?: string,
    client?: string,
    executant?: string,
    timer?: string,
    solution?: string,
    objDateStart?: {
        dateStart: string,
        timeStart: string,
    },
    objDateEnd?:{
        dateEnd: string,
        timeEnd: string,
    },
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
    temporaryTicket: AddTicketProps,
    id: number,
}

const initialState: TicketsSliceState = {
    temporaryItem: {
        category: '',
        subcategory: [],
    },
    tickets: [],
    temporaryTicket: {},
    id: 1,
    isVisibleCreateTicket: false,
    isVisibleAcceptanceTicket: false,
}

export const Ticket = createSlice({
    name: 'Ticket',
    initialState,
    reducers: {
        onVisibleCreateTicket: (state, action: PayloadAction<CreateTicketProps>) => {
            const findCategory = arrayTicketsSetting.find((item) => item.category === action.payload.category );
            console.log(findCategory)
            
            state.temporaryItem.category = findCategory?.category
            state.temporaryItem.subcategory = findCategory?.subcategory

            
            console.log(state.temporaryItem.category)
            state.isVisibleCreateTicket = !state.isVisibleCreateTicket
        },
        onVisibleTicketAcceptance: (state, action: PayloadAction<AddTicketProps>) => {
            const findTicket = state.tickets.find((item) => item.id === action.payload.id)
            console.log(findTicket)

            state.temporaryTicket = {
                ...action.payload
            }

            state.isVisibleAcceptanceTicket = !state.isVisibleAcceptanceTicket
        },
        onHidenTicketCard: (state) => {
            state.isVisibleCreateTicket = false;
            state.isVisibleAcceptanceTicket = false;
        },
        addTicket: (state, action: PayloadAction<AddTicketProps>) => {
            console.log(state.tickets)
            state.tickets.push({
                ...action.payload,
                createDate: {
                    readDate: new Date().toLocaleString(),
                    isoDate: new Date().toISOString(),
                },
                id: state.id,
                status: 'Нова',
                executant: '',
                solution: '',
            })

            state.id += 1

            console.log(action.payload)
            console.log(state.tickets)
            console.log(state.id)
        },
        uploadTicket: (state, action: PayloadAction<AddTicketProps>) => {
            const findTicket = state.tickets.find((item) => item.id === action.payload.id)
            console.log(findTicket)
            console.log(action.payload)
            if (findTicket) {
                findTicket.title = action.payload.title
                findTicket.subcategory = action.payload.subcategory
                findTicket.description = action.payload.description
                findTicket.status = action.payload.status
                findTicket.client = action.payload.client
                findTicket.executant = action.payload.executant
                findTicket.objDateStart = action.payload.objDateStart
                findTicket.objDateEnd = action.payload.objDateEnd
            }
                
            console.log(state.tickets)
        },
    }
})

export const {onVisibleCreateTicket, onVisibleTicketAcceptance, onHidenTicketCard , addTicket, uploadTicket } = Ticket.actions
export const selectTicket = (state: RootState) => state.Ticket;

export default Ticket.reducer;