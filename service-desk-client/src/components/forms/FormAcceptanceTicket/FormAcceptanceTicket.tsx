import style from './FormAcceptanceTicket.module.scss'
import { useState } from 'react'
import { arrayUsersInformation } from '../../../redux/slice/TicketSlice'
import { useAppDispatch } from '../../../redux/store'
import { useSelector } from 'react-redux'
import { selectTicket } from '../../../redux/slice/TicketSlice'
import { onHidenTicketCard } from '../../../redux/slice/TicketSlice'
import { uploadTicket } from '../../../redux/slice/TicketSlice'

const arrayStatus: Array<string> = ['Нове', "В роботі", "В черзі","Пауза", "Виконано", "Чорновик"]

export const FormAcceptanceTicket = () => {

    const { temporaryTicket, temporaryItem } = useSelector(selectTicket)
    
    const [inputTitle, setInputTitle] = useState<string>(temporaryTicket.title ?? '')
    const [selectSubcategory, setSelectSubcategory] = useState<string>(temporaryTicket.subcategory ?? '')
    const [inputDescription, setInputDescription] = useState<string>(temporaryTicket.description ?? '')
    const [selectStatus, setSelectStatus] = useState<string>(temporaryTicket.status ?? '')
    const [selectExecutant, setSelectExecutant] = useState<string>(temporaryTicket.executant ?? '')
    const [inputClient, setInputClient] = useState<string>(temporaryTicket.client ?? '')

    const dispatch = useAppDispatch()

    const onHidenTicket = () => {
        dispatch(onHidenTicketCard())
    }

    const handleInputTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(event.target.value)
    }

    const handleSelectSubcategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectSubcategory(event.target.value)
    }

    const handleInputDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputDescription(event.target.value)
    }

    const handleSelectStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectStatus(event.target.value)
    }

    const handleInputClient = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputClient(event.target.value)
    }

    const handleSelectExecutant = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectExecutant(event.target.value)
    }


    const newTicket = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Форма відправлена');

        const objTicket = {
            id: temporaryTicket.id,
            title: inputTitle,
            category: temporaryTicket.category,
            subcategory: selectSubcategory,
            description: inputDescription,
            status: selectStatus,
            client: inputClient,
            executant: selectExecutant,
        }

        dispatch(uploadTicket(objTicket))
        dispatch(onHidenTicketCard())
    }

    return (
        <section className={style.formCreateApplication}>
            <form onSubmit={newTicket}>
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
                            <label htmlFor="status">Статус:</label>
                            <select name="status" id="status" value={selectStatus} onChange={handleSelectStatus}>
                                <option value="Виберіть статус">Виберіть статус</option>
                                {arrayStatus.map((item, index) => (<option key={index} value={item}>{item}</option>))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="customer">Замовник:</label>
                            <input name="customer" id="customer" placeholder="Введіть ім`я замовника" type='text' value={inputClient} onChange={handleInputClient}></input>
                        </div>

                        <div>
                            <label htmlFor="executant">Виконавець:</label>
                            <select name="executant" id="executant" value={selectExecutant} onChange={handleSelectExecutant}>
                                <option value="Виберіть виконавця">Виберіть виконавця</option>
                                {arrayUsersInformation.map((item, index) => (<option key={index} value={item.user}>{item.user}</option>))}
                            </select>
                        </div>

                        <div className={style.dateSelect}>
                            <label htmlFor="dateStart">Дата взяття в роботу:</label>
                            <div className='flex-sb'>
                                <input type="date" />
                                <input type="time" name="" id="" />
                            </div>
                            <button>Встановити поточну дату та час</button>
                        </div>

                        <div className={style.dateSelect}>
                            <label htmlFor="dateEnd">Термін виконання:</label>
                            <div className='flex-sb'>
                                <input type="date" />
                                <input type="time" name="" id="" />
                            </div>
                            <button>Встановити поточну дату та час</button>
                        </div>
                    </fieldset>

                    <fieldset className={style.formBtn}>
                        
                        <button type='submit' className={style.doneBtn} >Затвердити</button>
                        <button type='reset' className={style.removeBtn} onClick={() => onHidenTicket()}>Відхилити</button>
                        <button>Відміна</button>
                       
                    </fieldset>
                </article>

            </form>
        </section>
    )
}