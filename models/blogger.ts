'use strict';
import { Model } from 'sequelize';

type UserAttributes = {
  id: string;
  name: string;
  email: string;
  password: string
};
module.exports = (sequelize: any, DataTypes: any) => {
  class Blogger extends Model<UserAttributes> {
    declare id: string;
    declare name: string;
    declare email: string;
    declare password: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Blogger.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
  }, {
    sequelize,
    modelName: 'Blogger',
  });
  return Blogger;
};