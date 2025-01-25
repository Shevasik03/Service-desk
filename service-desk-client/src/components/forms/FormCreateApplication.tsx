import style from './FormCreateApplication.module.scss'
import { useAppDispatch } from '../../redux/store'
import { useSelector, UseSelector } from 'react-redux'
import { selectCreateTickets } from '../../redux/slice/CreateTicketsSlice'
import { isVisibleTicket } from '../../redux/slice/CreateTicketsSlice'

export const FormCreateApplication = () => {

    const {items} = useSelector(selectCreateTickets)

    const dispatch = useAppDispatch()

    const onHidenTicket = () => {
        dispatch(isVisibleTicket())
    }

    return (
        <section className={style.formCreateApplication}>
            <form action="submit">
                <section className={`${style.formHeader} flex-sb`}>
                    <h1>Створення заявки</h1>
                    <img onClick={() => onHidenTicket()} src="/src/assets/img/closeIcon.svg" alt="" />
                </section>
                <article>
                    <fieldset>
                        <div>
                            <label htmlFor="title">Назва звернення:</label>
                            <input name="title" id="title" placeholder='Введіть назву звернення'></input>
                        </div>

                        <div>
                            <label htmlFor="category">Категорія:</label>
                            <p id='category'>{items.category}</p>
                        </div>

                        <div>
                            <label htmlFor="subcategory">Підкатегорія</label>
                            <select name="subcategory" id="subcategory">
                                <option value="">Виберіть підкатегорію</option>
                                {items.subcategory.map((item, index) => (<option key={index} value="">{item}</option>))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="description">Опис:</label>
                            <textarea name="description" id="description" placeholder='Введіть опис звернення'></textarea>
                        </div>

                        <div>
                            <label htmlFor="customer">Замовник:</label>
                            <input name="customer" id="customer" placeholder="Введіть ім`я замовника"></input>
                        </div>
                    </fieldset>

                    <fieldset className={style.formBtn}>
                        
                        <button type='submit' className={style.doneBtn}>Створити</button>
                        <button type='reset' className={style.removeBtn} onClick={() => onHidenTicket()}>Скасувати</button>
                       
                    </fieldset>
                </article>

            </form>
        </section>
    )
}