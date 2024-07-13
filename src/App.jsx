import { Outlet } from "react-router-dom"
import Navbar from "./sharedComponents/nav/Navbar"


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
