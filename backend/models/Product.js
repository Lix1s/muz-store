import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema ({
    category: {
        type: String, 
        required: true,
    },
   
    price: {
        type: String,
        required: true,
        
    },
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required:true
    }, 
        
       
        
       
    },
);

export default mongoose.model('Product', ProductSchema);