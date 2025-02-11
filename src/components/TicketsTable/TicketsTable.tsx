import style from './TicketsTable.module.scss'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { selectTicket } from '../../redux/slice/TicketSlice'
import { useSelector } from 'react-redux'
import type { AddTicketProps } from '../../redux/slice/TicketSlice'
import { useAppDispatch } from '../../redux/store'
import { onVisibleTicketAcceptance, setTickets } from '../../redux/slice/TicketSlice'
import { fetchTickets } from '../../redux/slice/TicketSlice'
import { TimerToHire, TimerToExpired } from '../Timer/Timer'



export const TicketsTable = ({currentItems}) => {
    
    const dispatch = useAppDispatch();
 
    const onVisibleTicket = (item: AddTicketProps) => {
        if(item.id !== undefined) dispatch(onVisibleTicketAcceptance(item))
    }

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
                    currentItems && currentItems.slice().reverse().map((item, index) => (
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

export const TicketsTableAndPagination = ({ ItemsPerPage }) => {

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
    const arrayTickets = [...doneTickets, ...workTickets];
    console.log(arrayTickets)

    const [itemOffset, setItemOffset] = useState(0)

    const endOffset = itemOffset + ItemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    const currentItems = arrayTickets.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(tickets.length / ItemsPerPage)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * ItemsPerPage) % tickets.length
        setItemOffset(newOffset)
    }

    return (
        <>
            <TicketsTable currentItems={currentItems} />
            <ReactPaginate
                className={style.pagination}
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
            
        </>
    )
}