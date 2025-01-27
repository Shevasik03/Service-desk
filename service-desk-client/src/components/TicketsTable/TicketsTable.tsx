import style from './TicketsTable.module.scss'
import { selectTicket } from '../../redux/slice/TicketSlice'
import { useSelector } from 'react-redux'

export const TicketsTable = () => {

    const { tickets } = useSelector(selectTicket)
    
    console.log(tickets)

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
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.date}</td>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.status}</td>
                            <td>{item.client}</td>
                            <td>{item.executant}</td>
                            <td>{item.timer}</td>
                            <td>{item.solution}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}