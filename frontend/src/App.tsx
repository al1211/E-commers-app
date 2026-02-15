import { createBrowserRouter,RouterProvider } from "react-router";
import Home from "../pages/Home"
import Login from "../pages/Login"
import ProductDetails from "../pages/ProductDetails"
import Signup from "../pages/Singup"


const router=createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:"/login",element:<Login/>},
  {path:"/signup",element:<Signup/>},
  {path:"/products",element:<ProductDetails/>},
])

export default function App(){
  return <RouterProvider router={router}/>
}