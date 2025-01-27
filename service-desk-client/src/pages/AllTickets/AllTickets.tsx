import style from './AllTickets.module.scss'

import { TicketsTable } from '../../components/TicketsTable/TicketsTable'

export const AllTickets = () => {

    return (
        <section className={style.allTickets}>
            <h1>Всі заявки</h1>
            <TicketsTable/>
        </section>
    )
}