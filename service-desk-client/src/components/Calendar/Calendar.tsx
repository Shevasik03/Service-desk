import style from './Calendar.module.scss'
import { useState } from 'react'

const daysOfWeek: Array<string> = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"]
const monthName: Array<string> = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"]

export const Calendar = () => {

    const today = new Date(); // поточний день
    const [currentMonth, setCurrentMonth] = useState<number>(today.getMonth()) // поточний місяць
    const [currentYear, setCurrentYear] = useState<number>(today.getFullYear()) // поточний рік

    const getDaysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate()
    } // отримуємо кількість днів у місяці

    const generateCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        const firstDayOfMonth = (new Date(currentMonth, currentYear, 1).getDay() + 6) % 7;
        const calendarDays: Array<number|null> = []

        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarDays.push(null);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            calendarDays.push(day)
        }

        return calendarDays;
    }

    const calendarDays = generateCalendarDays()

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear((prev) => prev - 1)
        } else {
            setCurrentMonth((prev) => prev - 1)
        }
    }

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear((prev) => prev + 1)
        } else {
            setCurrentMonth((prev) => prev + 1)
        }
    }



    return (
        <section className={style.calendar}>
            <div>
                <article className={style.header}>
                    <button onClick={handlePrevMonth}>
                        <img src="/src/assets/img/icons/arrow_btn.svg" alt="" />
                    </button>
                    <h2>{monthName[currentMonth]} {currentYear}</h2>
                    <button onClick={handleNextMonth}>
                        <img src="/src/assets/img/icons/arrow_btn.svg" alt="" />
                    </button>
                </article>
                <article className={style.body}>
                    <div className={style.daysOfWeek}>
                        {daysOfWeek.map((day, index) => (
                            <div key={index}>{day}</div>
                        ))}
                    </div>
                    <div className={style.daysMonth}> 
                        {calendarDays.map((day, index) => (
                            <div key={index} className=''>
                                {day || ''}
                            </div>
                        ))}
                    </div>
                </article>
            </div>
        </section>
    )
}

