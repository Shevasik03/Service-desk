import style from './CreateApplication.module.scss'
import { Aside } from '../../components/Aside/Aside'

export const CreateApplication = () => {
    return (
        <section className={`${style.createApplication}`}>
            <div className="wrapper">
                <div className={style.container}>
                    
                    <Aside/>

                    <article>
                        <button className={`${style.addApplication} flex`}>
                            <img src="/src/assets/img/icons/add.svg" alt="" />
                            <h1>Створити заявку</h1>
                        </button>

                        <div className={`${style.applicationSeting}`}>
                            <article className={`${style.setingBlock}`}>
                                <img src="" alt="" />
                            </article>
                        </div>

                    </article>
                </div>
            </div>
        </section>
    )
}