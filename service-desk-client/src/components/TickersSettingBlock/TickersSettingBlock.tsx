import style from './TickersSettingBlock.module.scss'

import { useAppDispatch } from '../../redux/store'
import { isVisibleTicket, openCreateTicket } from '../../redux/slice/CreateTicketsSlice'

import { TicketsSettingProps, arrayTicketsSetting } from '../../redux/slice/CreateTicketsSlice'

const SettingBlock = ({ src, category }: TicketsSettingProps) => {

    const dispatch = useAppDispatch();


    const onVisibleTicketSetting = (category: string) => {
        dispatch(openCreateTicket({category, subcategory: undefined}))
        dispatch(isVisibleTicket())
        console.log(category)
    }

    return (
        <article onClick={() => onVisibleTicketSetting(`${category}`)} className={`${style.setingBlock}`}>
            <div>
                <img src={`${src}`} alt={`${category}`} />
            </div>
            <span><b>{category}</b></span>
        </article>
    )
}

export const TicketsSettingBlock = () => {

    return (
        <>
            {arrayTicketsSetting.map((value, index) => (<SettingBlock key={index} {...value} />))}
        </>
    )
}