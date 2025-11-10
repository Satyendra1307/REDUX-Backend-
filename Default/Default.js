const products = require("../Model/model.js")
const Data = require("../api.js")

const data = async()=>{

    await products.deleteMany({})
    await products.insertMany(Data)
}

module.exports=data