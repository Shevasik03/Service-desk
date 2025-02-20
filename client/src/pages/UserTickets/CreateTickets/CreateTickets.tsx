import style from './CreateTickets.module.scss'

import { CategoryTicket } from '../../../components/UserTickets/CategoryTicket/CategoryTicket'
import { TicketsTableAndPagination } from '../../../components/UserTickets/TicketsTable/TicketsTable'


export const CreateTickets = () => {
    return (
        <section className={`${style.createApplication}`}>
            <article className={`${style.applicationSeting}`}>
                <CategoryTicket/>
            </article>

            <article className={style.myApplacation}>
                <h1>Мої заявки</h1>
                <TicketsTableAndPagination ItemsPerPage={10}/>
            </article>

        </section>
    )
}