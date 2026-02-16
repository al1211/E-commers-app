import Product from "../models/Products.models.js";


// Create a new product
export const createProduct=async(req,res)=>{
    try{
        console.log(req.body)
        const product=await Product.create(req.body);
        res.json({
            message:"Product created succesfully",
            product
        })

    }catch(err){
     res.status(500).json({message:"Server Error",err})
    }
};

// Get all products

export const getAllProducts= async(req,res)=>{
    try{
        const products=await Product.find().sort({createdAt:-1});
        res.json(products);

    }catch(err){
      res.status(500).json({message:"Server Error",err})
    }
}

// Get a single product
export const getSingleProduct=async(req,res)=>{
    try{
        const updated=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});

        res.status(201).json({message:"Product updated succesfully",updated})

    }catch(err){
           res.status(500).json({message:"Server Error",err})
    }
}



// Delete Product
export const DeleteProduct=async(req,res)=>{
    try{
       const deletedProduct=await Product.findByIdAndDelete(req.params.id);
       res.status(204).json({message:"product was succesfull deleted"})
    }catch(err){
        res.status(500).json({message:"Internal Server Error",err})
    }
}
