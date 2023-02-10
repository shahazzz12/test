var express = require('express');
var router = express.Router();
var productModel = require('../model/ProductModel')
var product = require('../data/datas')
var cors = require('cors')

/* GET home page. */
router.get('/',     function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/totalProduct', async(req,res)=>{
  try {
    product=await productModel.find();
    console.log(product)
    res.json(product)
   } catch (error) {
      console.log(error)
   }
})

router.get('/addData',async(req,res)=>{
  try {
    productModel=await productModel.create(product);
    
  } catch (error) {
      console.log(error)
  }
})
module.exports = router;
