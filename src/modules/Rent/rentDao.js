'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User);
      this.belongsTo(models.Book);
    }
  }
  Rent.init(
    {
      userId: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER,
      in: DataTypes.DATE,
      back: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Rent'
    }
  );
  return Rent;
};
