import express from "express"
import { createProduct, DeleteProduct, getAllProducts, updateProductRoute } from "../controllers/Product.controller.js";

const productRoutes=express.Router();

productRoutes.post("/create",createProduct)
productRoutes.get("/get",getAllProducts)
productRoutes.get("/:id",updateProductRoute)
productRoutes.delete("/:id",DeleteProduct)


export default productRoutes;