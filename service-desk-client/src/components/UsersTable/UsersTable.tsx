import style from './UsersTable.module.scss'

type tableRowProps = {
        user: string;
        employeePosition: string;
        mail: string;
        key: number
}

const arrayUsersInformation = [
    {user: 'Дулєнцов Денис Михайлович',employeePosition: 'Заступник директора з управління даними та інформаційними технологіями',mail: 'denys.dulientsov@nemiroff.pro'},
    {user: 'Никифоров Микола Олександрович',employeePosition: 'Молодший адміністратор системи',mail: 'mykola.nykyforov@nemiroff.pro'},
    {user: 'Федорчук Костянтин Сергійович',employeePosition: 'Менеджер з керування даними',mail: 'kostiantyn.fedorchuk@nemiroff.pro'},
    {user: 'Ейсмонт Віктор Володимирович',employeePosition: 'Інженер-програміст',mail: 'viktor.eismont@nemiroff.pro'},
    {user: 'Борушенко Ірина Геннадіївна',employeePosition: 'Аналітик бізнесу',mail: 'iryna.borushenko@nemiroff.pro'},
    {user: 'Кашуба Сергій Дмитрович',employeePosition: 'Адміністратор системи',mail: 'serhii.kashuba@nemiroff.pro'},
    {user: "Прімак Дар'я Павлівна",employeePosition: 'Начальник відділу розробки програмного забезпечення',mail: 'daria.primak@nemiroff.pro'},
    {user: 'Ладуб Олександр Васильович',employeePosition: 'Молодший адміністратор системи',mail: 'oleksandr.ladub@nemiroff.pro'},
    {user: 'Кравець Юрій Васильович',employeePosition: 'Провідний фахівець зі звітності та аналітики',mail: 'yurii.kravets@nemiroff.pro'},
    {user: 'Ковальов Олександр Васильович',employeePosition: 'Головний адміністратор системи',mail: 'aleksandr.kovalev@nemiroff.pro'},
    {user: 'Бурковська Єлизавета Сергіївна',employeePosition: 'Адміністратор системи',mail: 'yelyzaveta.burkovska@nemiroff.pro'},
    {user: 'Оскін Дмитро Данилович',employeePosition: 'Адміністратор системи',mail: 'dmytro.oskin@nemiroff.pro'},
    {user: 'Гоцман Сергій Сергійович',employeePosition: 'Начальник відділу підтримки та розвитку інфраструктури',mail: 'sergey.gotsman@nemiroff.pro'},
    {user: 'Поліновський Олег Анатолійович',employeePosition: 'Провідний інженер-програміст',mail: 'oleh.polinovskyi@nemiroff.pro'},
    {user: 'Малиш Любов Іванівна',employeePosition: 'Фахівець з підтримки користувачів облікової системи',mail: 'l.malysh@nemiroff.pro'},
    {user: 'Василишина Галина Володимирівна',employeePosition: 'Аналітик бізнесу',mail: 'halyna.vasylyshyna@nemiroff.pro'},
    {user: 'Зелінський Віталій Вячеславович',employeePosition: 'Адміністратор системи',mail: 'vitalijj.zelinskijj@nemiroff.pro'},
    {user: 'Балашов Максим Олександрович',employeePosition: 'Старший адміністратор системи',mail: 'maksim.balashov@nemiroff.pro'},
    {user: 'Варенич Олександр Анатолійович',employeePosition: 'Керівник відділу аналізу даних та звітності',mail: 'oleksandr.varenych@nemiroff.pro'},
    {user: 'Тараненко Катерина Олександрівна',employeePosition: 'Молодший інженер-програміст',mail: 'kateryna.taranenko@nemiroff.pro'},
    {user: 'Міхєєв Андрій Володимирович',employeePosition: 'Адміністратор системи',mail: 'andrii.mikhieiev@nemiroff.pro'},
    {user: 'Шевчук Олександр Валерійович',employeePosition: 'Молодший фахівець',mail: 'oleksandr.shevchuk@nemiroff.pro'},
    {user: 'Лучко Костянтин Сергійович',employeePosition: 'Адміністратор системи',mail: 'kostiantyn.luchko@nemiroff.pro'},
    {user: 'Хіміч Сергій Іванович',employeePosition: 'Інженер-програміст',mail: 'sergijj.himich@nemiroff.pro'},
]

const TableRow = ({ user, employeePosition, mail }: tableRowProps)=> {
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