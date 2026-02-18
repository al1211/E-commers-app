import { createBrowserRouter,RouterProvider } from "react-router";
import Home from "../pages/Home"
import Login from "../pages/Login"
import ProductDetails from "../pages/ProductDetails"
import Signup from "../pages/Singup"
import AddProduct from "../admin/AddProduct"
import ProductList from "../admin/ProductList"
import EditProduct from "../admin/EditProduct"

const router=createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:"/login",element:<Login/>},
  {path:"/signup",element:<Signup/>},
  {path:"/products",element:<ProductDetails/>},


  {path:"/admin/products",element:<AddProduct/>},
  {path:"/admin/product/list",element:<ProductList/>},
  {path:"/admin/product/edit",element:<EditProduct/>},
])

export default function App(){
  return <RouterProvider router={router}/>
}