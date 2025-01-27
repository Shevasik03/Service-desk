import { useLocation } from "react-router"
import { useSelector } from "react-redux"
import { selectTicket } from "../redux/slice/TicketSlice"

import { Outlet } from "react-router"
import { Header } from "./Header/Header"
import { Aside } from "./Aside/Aside"
import { FormCreateTicket } from "../components/forms/FormCreateTicket/FormCreateTicket"


export const Layout = () => {

  const location = useLocation();
  const { isVisible } = useSelector(selectTicket)

  return (
    <>
      <Header />
      <main>
        <div className="wrapper">

          {isVisible && <FormCreateTicket />}

          {['/allTickets', '/myWorkTickets'].includes(location.pathname ) ? (
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