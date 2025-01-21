import style from './CreateApplication.module.scss'

export const CreateApplication = () => {
    return (
        <section className={`${style.createApplication}`}>
            <div className="wrapper">
                <div className={style.container}>
                    <aside>
                        <article className={style.serviceStatus}>
                            <div>

                                <h4></h4>
                            </div>
                            <p></p>
                        </article>

                        <article className={style.knowledgeBase}>

                        </article>

                        <article className={style.infoBlock}>

                        </article>
                    </aside>

                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}