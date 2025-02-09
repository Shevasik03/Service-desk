import style from './UsersInformation.module.scss'

import { UsersTable } from '../../components/UsersTable/UsersTable'

export const UsersInformation = () => {

    return (
        <section className={style.usersInformation}>
            <h1>Співробітники відділу управління даними та інформаційними технологіями</h1>
            <UsersTable/>
        </section>
    )
}