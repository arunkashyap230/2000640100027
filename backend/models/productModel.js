const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  rating: Number,
  discount: Number,
  availability: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
