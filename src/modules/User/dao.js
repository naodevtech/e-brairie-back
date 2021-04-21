'use strict';
import { Model } from 'sequelize';

class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true
        },
        role: DataTypes.STRING,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
      },
      { sequelize, modelName: 'User' }
    );
  }
  static associate(models) {
    // define association here
    this.hasMany(models.Rent, {
      onDelete: 'cascade'
    });
    return this;
  }
}

export default User;
