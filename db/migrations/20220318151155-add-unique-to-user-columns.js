'use strict';
let options = {};
options.tableName = 'Users';
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
        return queryInterface.changeColumn(options,'username', { 
          type: Sequelize.DataTypes.STRING(20), 
          unique: true,
          allowNull: false
        });

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
      return queryInterface.changeColumn(options,'username', { 
        type: Sequelize.DataTypes.STRING(20), 
        allowNull: false 
      }, options);

  }
};
