import style from './CreateTickets.module.scss'

import { TicketsSettingBlock } from '../../components/TickersSettingBlock/TickersSettingBlock'
import { ApplicationTable } from '../../components/ApplicationTable/ApplicationTable'


export const CreateTickets = () => {
    return (
        <section className={`${style.createApplication}`}>
            <article className={`${style.applicationSeting}`}>
                <TicketsSettingBlock/>
            </article>

            <article className={style.myApplacation}>
                <h1>Мої заявки</h1>
                <ApplicationTable/>
            </article>

        </section>
    )
}