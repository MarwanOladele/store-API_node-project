const getAllProductsStatic = (req, res) => {
  res.status(200).send({ msg: "Products" });
};

const getAllProducts = (req, res) => {
  res.status(200).send({ msg: "Products" });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
