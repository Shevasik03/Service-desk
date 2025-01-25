import { useLocation } from "react-router"
import { useSelector } from "react-redux"
import { selectCreateTickets } from "../redux/slice/CreateTicketsSlice"

import { Outlet } from "react-router"
import { Header } from "./Header/Header"
import { Aside } from "./Aside/Aside"
import { FormCreateApplication } from "../components/forms/FormCreateApplication"


export const Layout = () => {

  const location = useLocation();
  const {isVisible} = useSelector(selectCreateTickets)

  return (
    <>
      <Header />
      <main>
        <div className="wrapper">

          {isVisible && <FormCreateApplication />}

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