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

  const authUser = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/userinfo', { withCredentials: true })
      console.log(data)
      setUser(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    authUser()
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