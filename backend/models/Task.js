module.exports = function(sequelize, Sequelize) {

    var Task = sequelize.define('Task', {

        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },

        name: {
          type: Sequelize.STRING,
          allowNull: false
        },

        userId: {
          type: Sequelize.INTEGER,
          allowNull: true
        }
      }
    );
    Task.associate = function (models) {
      Task.belongsTo(models.User, {
        as: 'UserTask',
        foreignKey: 'userId'
      });
    };
    return Task;

};