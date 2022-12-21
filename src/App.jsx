import { Outlet,useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
function App() {
  const location = useLocation()
  return (
    <main className="App container mx-auto overflow-hidden">
        <Navbar/>
        { location.pathname === '/' ? <Home/> : <Outlet/> }
    </main>
  )
}

export default App
