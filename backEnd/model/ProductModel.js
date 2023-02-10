const mongoose = require("mongoose");
const ProductModel = new mongoose.Schema({
    name :{
        type :String,
        required:true
    },
    price :{
        type :String,
        required:true
    },
    Catageory :{
        type :String,
        required:true
    },
    subCatagory :{
        type :String,
        required:true
    },
    subCatagory2 :{
        type :String,
        required:true
    }
})
module.exports = mongoose.model("product", ProductModel);
