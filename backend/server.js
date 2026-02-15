import express from "express";
import cors from "cors";
import config from "./config/var.js"
import { ConnectDb } from "./config/db.js";

const app=express();


const PORT=config.port;
 
app.use(cors());
app.use(express.json())

ConnectDb();

app.get("/health",(req,res)=>{
    res.send("server is running")
})

app.listen(PORT,()=>{
    console.log(`server is listen ${PORT}`)
})