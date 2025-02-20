import style from './UsersInfoTable.module.scss'
import React from 'react'
import { arrayUsersInformation, tableRowProps } from '../../../redux/slice/ArraysDB'

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
                    arrayUsersInformation.map((item, index) => (
                       <React.Fragment key={index}>
                            <tr>
                                <td colSpan={3} style={{ textAlign: 'center' }}>{item.department}</td>
                            </tr>
                            {item.users.map((user, idx) => (
                                <TableRow key={idx} {...user} />
                            ))}
                        </React.Fragment>
                    ))
               }
            </tbody>
        </table>
    )
}

