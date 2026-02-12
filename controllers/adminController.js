const products = require('../Model/Productmodel')


get = async(req,res)=>{
    try{
        const data=await products.find({})
        res.json(data)
    }catch(err){
        res.json(err)
    }
}


add = async (req, res) => {
    try {
        const product = new products(req.body);
        await product.save();
        res.json({ success: true, message: "Product added successfully", product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


update = async (req, res) => {
    try {
        const updated = await products.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ success: true, message: "Product updated", updated });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


deleteP = async (req, res) => {
    try {
        await products.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Product deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {get,add,update,deleteP}