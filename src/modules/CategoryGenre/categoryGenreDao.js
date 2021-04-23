'use strict';
const { Model, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category);
      this.hasOne(models.Genre);
    }
  }
  CategoryGenre.init(
    {
      categoryId: Sequelize.INTEGER,
      genreId: Sequelize.INTEGER
    },
    {
      sequelize,
      modelName: 'CategoryGenre'
    }
  );
  return CategoryGenre;
};
