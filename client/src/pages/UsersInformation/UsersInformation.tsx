import style from './UsersInformation.module.scss'

import { UsersTable } from '../../components/UserTickets/UsersInfoTable/UsersInfoTable'

export const UsersInformation = () => {

    return (
        <section className={style.usersInformation}>
            <h1>Співробітники відділу управління даними та інформаційними технологіями</h1>
            <UsersTable/>
        </section>
    )
}