import { createBrowserRouter } from "react-router-dom"
import App from '../App'
import Characters from "../components/Characters"
import Character from "../components/Character"
const router = createBrowserRouter([
   {
    path:'/',
    element:<App/>,
    children:[
      {
         path:'/characters/:page',
         element: <Characters/>
      },
      {
         path:'/character/:id',
         element: <Character/>
      }
    ]
   }
])
export default router