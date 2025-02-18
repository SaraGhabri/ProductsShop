import mongoose from "mongoose";
import { defaultShaderStages } from "three/webgpu";

const productSchema = new mongoose.Schema({
  name :{
    type: String,
    required: true
  },
  price:{
    type:Number,
    required:true,
  },
  image:{
    type:String,
    required:true
  },
},
  //timestamps will automatically create a field for the time the product was created and updated 
  {
    timestamps:true
  });

  //create a model / collection : product + the schema that the model should take
  // it is not products because mongoose will automatically add an s to the name of the model and remove the capital letter
  const Product = mongoose.model('Product', productSchema);
  export default  Product;
