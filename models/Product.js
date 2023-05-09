// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      Null: false,
      Key: true,
      Inc: true
    },
    product: {
      type: DataTypes.STRING,
      Null: false
    },
    price: {
      type: DataTypes.DECIMAL,
      Null: false,
      validate: {
        Dec: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      Null: false,
      deta: 10,
      Validate: {
        Num: true
      }
    },
    category: {
      type: DataTypes.INTEGER,
      ref: {
        model: 'category',
        key: 'id'
      }
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
