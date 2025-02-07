import style from './TicketsTable.module.scss'
import { useEffect } from 'react'
import { selectTicket } from '../../redux/slice/TicketSlice'
import { useSelector } from 'react-redux'
import type { AddTicketProps } from '../../redux/slice/TicketSlice'
import { useAppDispatch } from '../../redux/store'
import { onVisibleTicketAcceptance, setTickets } from '../../redux/slice/TicketSlice'
import { fetchTickets } from '../../redux/slice/TicketSlice'
import { TimerToHire, TimerToExpired } from '../Timer/Timer'

export const TicketsTable = () => {

    const dispatch = useAppDispatch();

    const { tickets } = useSelector(selectTicket);

    

    const fetchData = async () => {
        try {
            const responce = await fetchTickets()
            dispatch(setTickets(responce))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        void fetchData()
    }, [])
    
    const doneTickets = tickets.filter((item) => item.status === "Виконано")
    const workTickets = tickets.filter((item) => item.status !== "Виконано")


    const onVisibleTicket = (item: AddTicketProps) => {
        if(item.id !== undefined) dispatch(onVisibleTicketAcceptance(item))
    }
    
    console.log(tickets)

    if(tickets)

    return (
        <table className={style.applicationTable}>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Дата</th>
                    <th>Назва</th>
                    <th>Категорія</th>
                    <th>Статус</th>
                    <th>Замовник</th>
                    <th>Виконавець</th>
                    <th>Таймер</th>
                    <th>Рішення</th>
                </tr>
            </thead>
            <tbody>
                {  
                    workTickets.slice().reverse().map((item, index) => (
                        <tr key={index} onClick={() => onVisibleTicket(item)}>
                            <td>{item.id}</td>
                            <td>{item.createDate?.readDate}</td>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.status}</td>
                            <td>{item.client}</td>
                            <td>{item.executant}</td>
                            <td>{
                                item.doneTicket ? <></> : (
                                    item.objDateStart?.isoDateTime === '' ?
                                    <TimerToHire
                                        startDate={item.createDate?.isoDate}
                                    /> :
                                    <TimerToExpired
                                        endWorkDate={item.objDateEnd?.isoDateTime}
                                    /> 
                                )
                                
                            }</td>
                            <td>{item.solution}</td>
                        </tr>
                    ))
                }
                {
                    doneTickets.slice().reverse().map((item, index) => (
                        <tr key={index} onClick={() => onVisibleTicket(item)}>
                            <td>{item.id}</td>
                            <td>{item.createDate?.readDate}</td>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.status}</td>
                            <td>{item.client}</td>
                            <td>{item.executant}</td>
                            <td>{
                                item.doneTicket ? <></> : (
                                    item.objDateStart?.isoDateTime === '' ?
                                    <TimerToHire
                                        startDate={item.createDate?.isoDate}
                                    /> :
                                    <TimerToExpired
                                        endWorkDate={item.objDateEnd?.isoDateTime}
                                    /> 
                                )
                                
                            }</td>
                            <td>{item.solution}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}