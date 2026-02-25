import React from "react"

// import AddProduct from "../pages/auth/admin/AddProduct"
// import ProductList from "../pages/auth/admin/ProductList"
// import EditProduct from "../pages/auth/admin/EditProduct"
import AddProduct from "../pages/admin/AddProduct"
import ProductList from "../pages/admin/ProductList"
import EditProduct from "../pages/admin/EditProduct"
import type { RouteObject } from "react-router"

export const ProductRoute:RouteObject[]=[

  {
    path: "/admin",
    children: [
      { path: "products", element: <AddProduct /> },
      { path: "product/list", element: <ProductList /> },
      { path: "product/edit/:id", element: <EditProduct /> },
    ],
  },
]