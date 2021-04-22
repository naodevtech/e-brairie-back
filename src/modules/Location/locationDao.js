'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Book);
      this.belongsTo(models.Category);
    }
  }
  Location.init(
    {
      floor: DataTypes.INTEGER,
      shelf: DataTypes.STRING,
      place: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Location'
    }
  );
  return Location;
};
