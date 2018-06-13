/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movies', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: false
    },
    actor_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    avg_rating :{
      type: "DOUBLE",
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    tableName: 'movies'
  });
};
