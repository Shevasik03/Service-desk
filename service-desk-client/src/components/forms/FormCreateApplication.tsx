import style from './FormCreateApplication.module.scss'

export const FormCreateApplication = () => {

    return (
        <section className={style.formCreateApplication}>
            <form action="">
                <h1>Створення заявки</h1>
                <article>
                    <fieldset>
                        <div>
                            <label htmlFor="category">Обрана категорія:</label>
                            <p id='category'>Комп'ютер</p>
                        </div>

                        <div>
                            <label htmlFor="title">Назва звернення:</label>
                            <input name="title" id="title" placeholder='Введіть назву звернення'></input>
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
                        <button type='reset' className={style.removeBtn}>Скасувати</button>
                       
                    </fieldset>
                </article>

            </form>
        </section>
    )
}