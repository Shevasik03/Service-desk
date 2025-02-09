import style from './TickersSettingBlock.module.scss'
import { useAppDispatch } from '../../redux/store'
import { onVisibleCreateTicket } from '../../redux/slice/TicketSlice'
import { TicketsSettingProps, arrayTicketsSetting } from '../../redux/slice/ArraysDB'

const SettingBlock = ({ src, category }: TicketsSettingProps) => {

    const dispatch = useAppDispatch();


    const onVisibleTicketSetting = (category: string) => {
        dispatch(onVisibleCreateTicket({category, subcategory: undefined}))

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