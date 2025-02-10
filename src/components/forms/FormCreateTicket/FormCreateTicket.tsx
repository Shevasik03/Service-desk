import style from './FormCreateTicket.module.scss'
import { useState } from 'react'

import { useAppDispatch } from '../../../redux/store'
import { useSelector } from 'react-redux'
import { selectTicket } from '../../../redux/slice/TicketSlice'
import { onHidenTicketCard } from '../../../redux/slice/TicketSlice'
import { addTicket } from '../../../redux/slice/TicketSlice'

export const FormCreateTicket = () => {

    const { temporaryItem } = useSelector(selectTicket)
    
    const [inputTitle, setInputTitle] = useState<string>("")
    const [inputDescription, setInputDescription] = useState<string>("")
    const [inputClient, setInputClient] = useState<string>("")
    const [selectSubcategory, setSelectSubcategory] = useState<string>("")
    const [inputNameMachine, setInputNameMachine] = useState<string>("")

   

    const dispatch = useAppDispatch()

    const onHidenTicket = () => {
        dispatch(onHidenTicketCard())
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

    const handleInputNameMachine = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputNameMachine(event.target.value)
    }

    const newTicket = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const objTicket = {
            title: inputTitle,
            category: temporaryItem.category,
            subcategory: selectSubcategory,
            description: inputDescription,
            client: inputClient,
            nameMachine: inputNameMachine,
        }

        dispatch(addTicket(objTicket))
        dispatch(onHidenTicketCard())

        setInputTitle("")
        setInputDescription("")
        setInputClient("")
        setSelectSubcategory("")
    }

    return (
        <section className={style.formCreateApplication}>
            <form onSubmit={newTicket}>
                <section className={`${style.formHeader} flex-sb`}>
                    <h1>Створення заявки</h1>
                    <img onClick={() => onHidenTicket()} src="./closeIcon.svg" alt="" />
                </section>
                <article>
                    <fieldset>
                        <div>
                            <label htmlFor="title">Назва звернення:</label>
                            <input name="title" id="title" placeholder='Введіть назву звернення' type='text' value={inputTitle} onChange={handleInputTitle}></input>
                        </div>

                        <div>
                            <label htmlFor="category">Категорія:</label>
                            <p id='category'>{temporaryItem.category}</p>
                        </div>

                        <div>
                            <label htmlFor="subcategory">Підкатегорія</label>
                            <select name="subcategory" id="subcategory" value={selectSubcategory} onChange={handleSelectSubcategory}>
                                <option value="Виберіть підкатегорію">Виберіть підкатегорію</option>
                                {temporaryItem.subcategory?.map((item, index) => (<option key={index} value={item}>{item}</option>))}
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

                        <div>
                            <label htmlFor="nameMachine">Назва пристрою:</label>
                            <input name="nameMachine" id="nameMachine" placeholder="Введіть ім'я пк або принтера" type='text' value={inputNameMachine} onChange={handleInputNameMachine}></input>
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