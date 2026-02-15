import express from "express";
import cors from "cors";
import config from "./config/var.js"
import { ConnectDb } from "./config/db.js";
import authRoute from "./routes/auth.routes.js";

const app=express();


const PORT=config.port;
 
app.use(cors());
app.use(express.json())

ConnectDb();

app.use("/",authRoute)

app.listen(PORT,()=>{
    console.log(`server is listen ${PORT}`)
})