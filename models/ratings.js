/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ratings', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      unique: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    movie_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'movies',
        key: 'id'
      }
    },
    ratings: {
      type: DataTypes.INTEGER(5),
      allowNull: false
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
    tableName: 'ratings'
  });
};