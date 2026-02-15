import mongoose from "mongoose";
import { timeStamp } from "node:console";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    }
},{timeStamp:true});


export default mongoose.model("User",userSchema);