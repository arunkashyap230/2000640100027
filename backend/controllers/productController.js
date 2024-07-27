const getTopProducts = (req, res) => {
  // Logic to fetch top products
  res.send('Top products');
};

const getProductById = (req, res) => {
  // Logic to fetch product by ID
  res.send(`Product with ID ${req.params.productId}`);
};

module.exports = {
  getTopProducts,
  getProductById,
};
