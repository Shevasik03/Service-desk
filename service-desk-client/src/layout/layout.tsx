import { Outlet } from "react-router"
import { Header } from "./Header/Header"
import { Aside } from "./Aside/Aside"

export const Layout = () => {

  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          <div className="container-grid">
            <Aside/>
            <Outlet/>
          </div>
        </div>
      </main>
    </>
  )
}