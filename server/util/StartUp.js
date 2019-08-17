const Wood = require('../models/Wood');
const Brand = require('../models/Brand');
const Product = require('../models/Products');
const { WoodData, BrandData, ProductData } = require('../util/Data');

const startUpToDo = async port => {
  // eslint-disable-next-line no-useless-catch
  try {
    // const woodCount = await Wood.countDocuments();
    // if (!woodCount) await Wood.insertMany(WoodData);
    // const brandCount = await Brand.countDocuments();
    // if (!brandCount) await Brand.insertMany(BrandData);
    // const productCount = await Product.countDocuments();
    // if (!productCount) await Product.insertMany(ProductData);
    console.log(`Example app listening on port ${port}!`);
  } catch (e) {
    throw e;
  }
};

module.exports = { startUpToDo };
