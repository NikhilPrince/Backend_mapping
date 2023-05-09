const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      Null: false,
      Key: true,
      Inc: true
    },
    product: {
      type: DataTypes.INTEGER,
      ref: {
        model: 'product',
        key: 'id'
      }
    },
    tag: {
      type: DataTypes.INTEGER,
      ref: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
