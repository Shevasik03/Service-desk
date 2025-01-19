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
                                    <img src="/src/assets/img/Portal_Logo_2019.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">Заявки</a>
                            </li>
                            <ul>
                                <a href="">Адміністрування</a>

                                <ul>
                                    <li>Всі заявки</li>
                                    <li>Мої задачі</li>
                                </ul>
                            </ul>
                            <ul>
                                <a href="">ІТ-співробітники</a>

                                <ul>
                                    <li>Київський відділ</li>
                                    <li>Немирівський відділ</li>
                                </ul>
                            </ul>
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