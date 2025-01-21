import style from "./Header.module.scss"

export const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <article className={`${style.container}`}>
                    <nav  className="flex-sb">
                        <ul className="flex-sb">
                            <li>
                                <a href="">
                                    <img src="/src/assets/img/Nemiroff_logo.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">Створення заявки</a>
                            </li>
                            <ul>
                                <div className="flex">
                                    <span>Адміністрування</span>
                                    <svg className={style.svg_arrow} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000">
                                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                                    </svg>     
                                </div>

                                <ul>
                                    <li><a href="">Всі заявки</a></li>
                                    <li><a href="">Мої задачі</a></li>
                                </ul>
                            </ul>
                            <li><a href="">ІТ-співробітники</a></li>
                        </ul>
                        <span>
                            Hi, Oleksandr
                        </span>
                    </nav>
                </article>
            </div>
        </header>
    )
}