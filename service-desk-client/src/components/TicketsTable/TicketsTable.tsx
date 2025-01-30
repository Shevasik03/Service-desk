import style from './TicketsTable.module.scss'
import { selectTicket } from '../../redux/slice/TicketSlice'
import { useSelector } from 'react-redux'
import type { AddTicketProps } from '../../redux/slice/TicketSlice'
import { useAppDispatch } from '../../redux/store'
import { onVisibleTicketAcceptance } from '../../redux/slice/TicketSlice'
import { Timer } from '../Timer/Timer'

export const TicketsTable = () => {

    const { tickets } = useSelector(selectTicket);

    const dispatch = useAppDispatch();

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
                    tickets.slice().reverse().map((item, index) => (
                        <tr key={index} onClick={() => onVisibleTicket(item)}>
                            <td>{item.id}</td>
                            <td>{item.createDate?.readDate}</td>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.status}</td>
                            <td>{item.client}</td>
                            <td>{item.executant}</td>
                            <td><Timer key={index} startDate={item.createDate?.isoDate} /></td>
                            <td>{item.solution}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}