import style from "./Header.module.scss"
import { Link } from "react-router"

export const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <article className={`${style.container}`}>
                    <nav  className="flex-sb">
                        <ul className="flex-sb">
                            <li className={style.headerLogo}>
                               
                                <img src="./Nemiroff_logo.png" alt="" />
                               
                            </li>
                            <li>
                                <Link to="/">Створення заявки</Link>
                            </li>
                            <ul>
                                <div className="flex">
                                    <span>Адміністрування</span>
                                    <svg className={style.svg_arrow} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000">
                                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                                    </svg>     
                                </div>

                                <ul>
                                    <li><Link to={'/allTickets'}>Всі заявки</Link></li>
                                    <li><Link to={'/myWorkTickets'}>Мої задачі</Link></li>
                                </ul>
                            </ul>
                            <li><Link to={'/users'}>ІТ-співробітники</Link></li>
                            <li><Link to={'/aboutProject'}>Інформація про сервіс</Link></li>
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