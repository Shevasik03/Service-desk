import style from './CreateApplication.module.scss'
import { Aside } from '../../components/Aside/Aside'

import { ApplicationSettingBlock } from '../../components/ApplicationSeting/ApplicationSeting'
import { ApplicationTable } from '../../components/ApplicationTable/ApplicationTable'

export const CreateApplication = () => {
    return (
        <section className={`${style.createApplication}`}>
            <div className="wrapper">
                <div className={style.container}>
                    
                    <Aside/>

                    <article>
                        <article className={`${style.applicationSeting}`}>
                            <ApplicationSettingBlock/>
                        </article>

                        <article className={style.myApplacation}>
                            <h1>Мої заявки</h1>
                            <ApplicationTable/>
                        </article>

                    </article>
                </div>
            </div>
        </section>
    )
}