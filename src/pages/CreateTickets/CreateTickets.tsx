import style from './CreateTickets.module.scss'

import { TicketsSettingBlock } from '../../components/TickersSettingBlock/TickersSettingBlock.tsx'
import { TicketsTable } from '../../components/TicketsTable/TicketsTable.tsx'


export const CreateTickets = () => {
    return (
        <section className={`${style.createApplication}`}>
            <article className={`${style.applicationSeting}`}>
                <TicketsSettingBlock/>
            </article>

            <article className={style.myApplacation}>
                <h1>Мої заявки</h1>
                <TicketsTable/>
            </article>

        </section>
    )
}