import { useLocation } from "react-router"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useAppDispatch } from "../redux/store"
import { selectTicket } from "../redux/slice/TicketSlice"
import { setAuthUser } from "../redux/slice/UserInfoSlice"
import { fetchAuthUser } from "../redux/slice/UserInfoSlice"


import { Outlet } from "react-router"
import { Header } from "./Header/Header"
import { Aside } from "./Aside/Aside"
import { FormCreateTicket } from "../components/UserTickets/TicketForms/FormCreate/FormCreate"
import { FormAcceptanceTicket } from "../components/UserTickets/TicketForms/FormAcceptance/FormAcceptance"



export const Layout = () => {

  const dispatch = useAppDispatch()

  const location = useLocation();
  const { isVisibleCreateTicket, isVisibleAcceptanceTicket } = useSelector(selectTicket)
  
  const fetchData = async () => {
    try {
      const responce = await fetchAuthUser()
      if (!responce) return;
      dispatch(setAuthUser(responce))
      console.log(responce)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    void fetchData()
  }, [])


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