import { createBrowserRouter,RouterProvider } from "react-router";
import {ProductRoute} from "../routes/product.route"
import {AuthRoute} from "../routes/auth.route"


const router=createBrowserRouter([...AuthRoute,...ProductRoute,])

export default function App(){
  return <RouterProvider router={router}/>
}