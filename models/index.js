// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  Key: 'category_id',
});
// Categories have many Products
Category.hasMany(Product, {
  Key: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  Key: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  Key: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
