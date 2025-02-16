import style from './AllTickets.module.scss'

import { TicketsTableAndPagination } from '../../components/TicketsTable/TicketsTable'

export const AllTickets = () => {

    return (
        <section className={style.allTickets}>
            <h1>Всі заявки</h1>
            <TicketsTableAndPagination ItemsPerPage={10} />
        </section>
    )
}