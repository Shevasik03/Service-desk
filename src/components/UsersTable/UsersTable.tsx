import style from './UsersTable.module.scss'
import { arrayUsersInformation, tableRowProps } from '../../redux/slice/ArraysDB'

const TableRow = ({ user, employeePosition, mail }: tableRowProps) => {    
    return (
        <tr>
            <td>{user}</td>
            <td>{employeePosition}</td>
            <td>{mail}</td>
        </tr>
    )
}

export const UsersTable = () => {
    return (
        
        <table className={style.usersTable}>
            <thead>
                <tr>
                    <th>Користувач</th>
                    <th>Посада</th>
                    <th>Пошта</th>
                </tr>
            </thead>
            <tbody>
                {
                    arrayUsersInformation.map((item, index) => (<TableRow key={index} {...item} />))
               }
            </tbody>
        </table>
    )
}