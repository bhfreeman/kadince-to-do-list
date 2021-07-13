const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Todo extends Model {}

Todo.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        text: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        list_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'list',
            key: 'id'
          }
        },
        isComplete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
        },
      {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'todo',
      }
)

module.exports = Todo;