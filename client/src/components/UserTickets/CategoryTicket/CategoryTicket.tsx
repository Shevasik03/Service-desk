import style from './CategoryTicket.module.scss'
import ContentLoader from 'react-content-loader'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../redux/store'
import { selectTicket } from '../../../redux/slice/TicketSlice'
import { onVisibleCreateTicket } from '../../../redux/slice/TicketSlice'
import { TicketsSettingProps, arrayTicketsSetting } from '../../../redux/slice/ArraysDB'

const CategoryTicketLoader = () => (
  <ContentLoader 
    speed={2}
    width={100}
    height={100}
    viewBox="0 0 100 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="15" ry="15" width="100" height="100" />
  </ContentLoader>
)

const CategoryItem = ({ src, category }: TicketsSettingProps) => {

    const dispatch = useAppDispatch();

    const onVisibleTicketSetting = (category: string) => {
        dispatch(onVisibleCreateTicket({category, subcategory: undefined}))

    }

    return (
        <article onClick={() => onVisibleTicketSetting(`${category}`)} className={`${style.category}`}>
            <div>
                <img src={`${src}`} alt={`${category}`} />
            </div>
            <span><b>{category}</b></span>
        </article>
    )
}

export const CategoryTicket = () => {

    const {tickets} = useSelector(selectTicket)

    return (
        <>
            {!tickets 
                ? <CategoryTicketLoader />
                : arrayTicketsSetting.map((value, index) => (<CategoryItem key={index} {...value} />))
            }
        </>
    )
}