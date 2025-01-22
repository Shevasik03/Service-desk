import style from './Aside.module.scss'

export const Aside = () => {
    return (
        <aside>
            <article className={style.serviceStatus}>
                <div className='flex-sb'>
                    <img src="/src/assets/img/serviceStatus.svg" alt="" />
                    <h2>Стан сервісів:</h2>
                    <p>Perfomance Status <span>98</span>%</p>
                </div>
                
            </article>

            <article className={style.knowledgeBase}>
                <div className='flex'>
                    <img src="/src/assets/img/knowlegdeBase.svg" alt="" />
                    <h2>База знань:</h2>
                </div>
                <ul>
                    <li>
                        <a href="https://support.microsoft.com/uk-ua/windows/%D0%B7%D0%BC%D1%96%D0%BD%D0%B0-%D0%B0%D0%B1%D0%BE-%D1%81%D0%BA%D0%B8%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F-%D0%BF%D0%B0%D1%80%D0%BE%D0%BB%D1%8F-8271d17c-9f9e-443f-835a-8318c8f68b9c">Як скинути пароль</a>
                    </li>
                    <li>
                        <a href="https://help.vchasno.com.ua/onovlene-zavantazhennya-dokumentiv/">Оновлення завантаження документів</a>
                        </li>
                    <li>
                        <a href="https://help.vchasno.com.ua/starttosend/">Як працювати з Vchasno</a>
                        </li>
                    <li>
                        <a href="https://help.vchasno.com.ua/loadingdoc/">Як завантажити документ до Vchasno</a>
                        </li>
                    <li>
                        <a href="https://help.vchasno.com.ua/signdoc/">Як Підписати вхідний документ</a>
                        </li>
                </ul>
            </article>

            <article className={style.infoBlock}>

                <div className={`${style.title} flex`}>
                    <img src="/src/assets/img/infoNews.svg" alt="" />
                    <h2>Новини відділу IT:</h2>
                </div>

                <div className={`${style.infoContainer}`}>
                    <article>
                        <h3>Цифрова трансформація Nemiroff</h3>
                        <p>З яких проєктів складається наша цифрова трансформація.</p>
                        <a href="https://lvnlimited.sharepoint.com/News/SitePages/uk/Digital-Transformation-at-Nemiroff.aspx">Читати далі</a>
                    </article>
                </div>

            </article>
        </aside>
    )
}