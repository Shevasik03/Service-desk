

import style from './ApplicationSeting.module.scss'

interface ApplicationSetingProps {
    src: string;
    nameSeting: string;
}

const arrayApplicationSeting: Array<ApplicationSetingProps> = [
    {src:'/src/assets/img/icons/printer.svg', nameSeting: 'Принтер'},
    {src:'/src/assets/img/icons/computer.svg', nameSeting: "Комп'ютер"},
    {src:'/src/assets/img/icons/accessRights.svg', nameSeting: 'Обліковий запис'},
    {src:'/src/assets/img/icons/erp.svg', nameSeting: 'Термінал/1С'},
    {src:'/src/assets/img/icons/cloudStorage.svg', nameSeting: 'Хмарне сховище'},
    {src:'/src/assets/img/icons/cart.svg', nameSeting: 'Замовлення техніки'},
    {src:'/src/assets/img/icons/workplaceRemote.svg', nameSeting: 'Встановлення/Перенесення робочого місця'},
    {src:'/src/assets/img/icons/programInstalation.svg', nameSeting: 'Встановлення ПЗ'},
    {src:'/src/assets/img/icons/permit.svg', nameSeting: 'СКД'},
    {src:'/src/assets/img/icons/videoSurveillance.svg', nameSeting: 'Відеонагляд'},
    {src:'/src/assets/img/icons/other.svg', nameSeting: 'Інше'},
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