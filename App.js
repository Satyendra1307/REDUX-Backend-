// const express=require('express')

// const app=express()

// require("./db/Connection.js")

// const port=9000

// const products=require("./Model/model.js")

// const data=require("./Default/Default.js")

// data()

// const cors = require('cors')

// app.use(express.json())
// app.use(cors())


// app.get('/',(req,res)=>{

//     res.send("hello world")

// })



// app.get("/getProducts",async(req,res)=>{

//     try{

//         const data = await products.find({})

//         res.json(data)

//     }catch(err){

//         res.json(err)

//     }

// })



// app.listen(port,()=>{

//     console.log(`example app listing on port ${port}`)


// })

const express=require('express')
const app=express()
require('./db/Connection.js')
const products=require('./Model/model.js')
const data=require('./Default/Default.js')
const cors=require('cors')
app.use(express.json())
app.use(cors())

const port=9000

data()

app.get('/',(req,res)=>{

    res.send("hello world")

})
app.get("/getproducts",async(req,res)=>{
    try{
        const data=await products.find({})
        res.json(data)
    }catch(err){
        res.json(err)
    }
})

// ✅ Add Product (Admin)
app.post('/addProduct', async (req, res) => {
    try {
        const product = new products(req.body);
        await product.save();
        res.json({ success: true, message: "Product added successfully", product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});




// ✅ Update Product by ID
app.put('/updateProduct/:id', async (req, res) => {
    try {
        const updated = await products.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ success: true, message: "Product updated", updated });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// ✅ Delete Product by ID
app.delete('/deleteProduct/:id', async (req, res) => {
    try {
        await products.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Product deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.listen(port,()=>{

    console.log(`example app listing on port ${port}`)

})



