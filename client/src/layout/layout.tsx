import { useLocation } from "react-router"
import { useSelector } from "react-redux"
import axios from "axios"
import { useEffect, useState } from "react"
import { selectTicket } from "../redux/slice/TicketSlice"

import { Outlet } from "react-router"
import { Header } from "./Header/Header"
import { Aside } from "./Aside/Aside"
import { FormCreateTicket } from "../components/forms/FormCreateTicket/FormCreateTicket"
import { FormAcceptanceTicket } from "../components/forms/FormAcceptanceTicket/FormAcceptanceTicket"



export const Layout = () => {

  const location = useLocation();
  const { isVisibleCreateTicket, isVisibleAcceptanceTicket } = useSelector(selectTicket)
  
  const [user, setUser] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/api/userinfo')
      .then(response => setUser(response.data))
      .catch(error => console.error('Помилка отримання даних користувача:', error))
  }, [])

  console.log(user)

  return (
    <>
      <Header />
      <main>
        <div className="wrapper">

          {isVisibleCreateTicket && <FormCreateTicket />}
          {isVisibleAcceptanceTicket && <FormAcceptanceTicket />}

          {['/allTickets', '/myWorkTickets', '/aboutProject'].includes(location.pathname ) ? (
            <div>
              <Outlet/>
            </div>
          ) : (
              <div className="container-grid">
                <Aside/>
                <Outlet/>
              </div>
            )
          }


        </div>
      </main>
    </>
  )
}