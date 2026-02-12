const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    review: { type: Number, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, default: "" },
    img: { type: String, required: true },
}, {
    timestamps: true
});

const Products =
  mongoose.models.products ||
  mongoose.model('products', productSchema);

module.exports = Products;
