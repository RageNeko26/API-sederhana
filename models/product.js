'use strict';
const { Model } = require('sequelize');

export default (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};