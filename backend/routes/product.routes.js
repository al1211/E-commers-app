import express from "express"
import { createProduct, DeleteProduct, getAllProducts, getSingleProduct, updateProductRoute } from "../controllers/Product.controller.js";

const productRoutes=express.Router();

productRoutes.post("/create",createProduct)
productRoutes.get("/get",getAllProducts)
productRoutes.put("/:id",updateProductRoute)
productRoutes.delete("/:id",DeleteProduct)


export default productRoutes;