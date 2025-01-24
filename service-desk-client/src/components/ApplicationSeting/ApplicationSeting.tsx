

import style from './ApplicationSeting.module.scss'

interface ApplicationSetingProps {
    src: string;
    nameSeting: string;
    subcategory: string[] | undefined
}

const arrayApplicationSeting: Array<ApplicationSetingProps> = [
    {src:'/src/assets/img/icons/printer.svg', nameSeting: 'Принтер', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/computer.svg', nameSeting: "Комп'ютер", subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/accessRights.svg', nameSeting: 'Обліковий запис', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/erp.svg', nameSeting: 'Термінал/1С', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/cloudStorage.svg', nameSeting: 'Хмарне сховище', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/cart.svg', nameSeting: 'Замовлення техніки', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/workplaceRemote.svg', nameSeting: 'Встановлення/Перенесення робочого місця', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/programInstalation.svg', nameSeting: 'Встановлення ПЗ', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/permit.svg', nameSeting: 'СКД', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/videoSurveillance.svg', nameSeting: 'Відеонагляд', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
    {src:'/src/assets/img/icons/other.svg', nameSeting: 'Інше', subcategory: ['Налаштування принтера', 'Сервісне обслуговування']},
]

const SettingBlock = ({ src, nameSeting }: ApplicationSetingProps) => {

    return (
        <article className={`${style.setingBlock}`}>
            <div>
                <img src={`${src}`} alt={`${nameSeting}`} />
            </div>
            <span><b>{nameSeting}</b></span>
        </article>
    )
}

export const ApplicationSettingBlock = () => {
    return (
        <>
            {arrayApplicationSeting.map((value, index) => (<SettingBlock key={index} {...value} />))}
        </>
    )
}