'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Author);
      this.belongsTo(models.Category);
      this.hasMany(models.Rent, {
        onDelete: 'cascade'
      });
    }
  }
  Book.init(
    {
      authorId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      amount: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Book'
    }
  );
  return Book;
};
