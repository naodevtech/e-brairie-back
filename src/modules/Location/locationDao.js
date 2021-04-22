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
      this.belongsTo(models.Ressource);
      this.belongsTo(models.Category);
    }
  }
  Location.init(
    {
      shelf: DataTypes.STRING,
      floor: DataTypes.INTEGER,
      place: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Location'
    }
  );
  return Location;
};
