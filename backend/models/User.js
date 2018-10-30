module.exports = function(sequelize, Sequelize) {

    var User = sequelize.define('User', {

        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },

        name: {
          type: Sequelize.STRING,
          allowNull: false
        }
      }
    );
    User.associate = function (models) {
      User.hasOne(models.Task, {
         as: 'UserTask',
         foreignKey: 'userId'
       });
    };
    return User;
};