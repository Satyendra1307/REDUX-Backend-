const mongoose=require('mongoose')

const Schema=new mongoose.Schema({

    id:String,

    name:String,

    price:String,

    rating:String,

    review:String,

    desc:String,

    category:String,

    img:String,

    category:String,

    subcategory:String,

})

const products=mongoose.model('product',Schema)

module.exports=products;