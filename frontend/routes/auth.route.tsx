import React from "react";
import type { RouteObject } from "react-router";
import Signup from "../pages/auth/Singup"
import Login from "../pages/auth/Login"
export  const AuthRoute:RouteObject[] =[
    {path:"/login",element:<Login/>},
    {path:"/signup",element:<Signup/>},
];