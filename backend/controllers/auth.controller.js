import User from "../models/User.models.js"

import bcrypt from "bcryptjs"


 const SingupUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body;

        // check if user is exist

        const userExits=await User.findOne({email});

        if(userExits){
            return  res.status(400).json({message:"User is already exists"})
        }

        // Hash password
          const hashPassword=await bcrypt.hash(password,10)

        // create User
        await User.create({
            name,
            email,
            password:hashPassword
        });
        res.status(201).json({message:"User registered succesfully"});



    }catch(err){
        res.status(500).json("Internal Server Error",err)

    }
}


export const authController={SingupUser}