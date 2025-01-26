import style from './FormCreateApplication.module.scss'
import { useState } from 'react'

import { useAppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'
import { selectCreateTickets } from '../../redux/slice/CreateTicketsSlice'
import { isVisibleTicket } from '../../redux/slice/CreateTicketsSlice'
import { addTicket } from '../../redux/slice/AddTicketSlice'

export const FormCreateApplication = () => {

    const { items } = useSelector(selectCreateTickets)
    
    const [inputTitle, setInputTitle] = useState<string>("")
    const [inputDescription, setInputDescription] = useState<string>("")
    const [inputClient, setInputClient] = useState<string>("")
    const [selectSubcategory, setSelectSubcategory] = useState<string>("")


   

    const dispatch = useAppDispatch()

    const onHidenTicket = () => {
        dispatch(isVisibleTicket())
    }

    const handleInputTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(event.target.value)
    }

    const handleInputDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputDescription(event.target.value)
    }

    const handleInputClient = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputClient(event.target.value)
    }

    const handleSelectSubcategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectSubcategory(event.target.value)
    }

    const newTicket = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const objTicket = {
            title: inputTitle,
            category: items.category,
            subcategory: selectSubcategory,
            description: inputDescription,
            status: 'Нова',
            client: inputClient,
        }

        dispatch(addTicket(objTicket))
        dispatch(isVisibleTicket())

        setInputTitle("")
        setInputDescription("")
        setInputClient("")
        setSelectSubcategory("")
    }

    return (
        <section className={style.formCreateApplication}>
            <form onSubmit={newTicket} method='POST'>
                <section className={`${style.formHeader} flex-sb`}>
                    <h1>Створення заявки</h1>
                    <img onClick={() => onHidenTicket()} src="/src/assets/img/closeIcon.svg" alt="" />
                </section>
                <article>
                    <fieldset>
                        <div>
                            <label htmlFor="title">Назва звернення:</label>
                            <input name="title" id="title" placeholder='Введіть назву звернення' type='text' value={inputTitle} onChange={handleInputTitle}></input>
                        </div>

                        <div>
                            <label htmlFor="category">Категорія:</label>
                            <p id='category'>{items.category}</p>
                        </div>

                        <div>
                            <label htmlFor="subcategory">Підкатегорія</label>
                            <select name="subcategory" id="subcategory" value={selectSubcategory} onChange={handleSelectSubcategory}>
                                <option value="">Виберіть підкатегорію</option>
                                {items.subcategory?.map((item, index) => (<option key={index} value="">{item}</option>))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="description">Опис:</label>
                            <textarea name="description" id="description" placeholder='Введіть опис звернення' value={inputDescription} onChange={handleInputDescription}></textarea>
                        </div>

                        <div>
                            <label htmlFor="customer">Замовник:</label>
                            <input name="customer" id="customer" placeholder="Введіть ім`я замовника" type='text' value={inputClient} onChange={handleInputClient}></input>
                        </div>
                    </fieldset>

                    <fieldset className={style.formBtn}>
                        
                        <button type='submit' className={style.doneBtn} >Створити</button>
                        <button type='reset' className={style.removeBtn} onClick={() => onHidenTicket()}>Скасувати</button>
                       
                    </fieldset>
                </article>

            </form>
        </section>
    )
}