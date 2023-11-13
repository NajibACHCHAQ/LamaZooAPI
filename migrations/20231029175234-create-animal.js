'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('animals', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false, // Vous pouvez définir allowNull en fonction de vos besoins
      },
      espece: {
        type: Sequelize.STRING,
        allowNull: false, // Vous pouvez définir allowNull en fonction de vos besoins
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false, // Vous pouvez définir allowNull en fonction de vos besoins
      },
      emplacement: {
        type: Sequelize.STRING,
        allowNull: true, // Vous pouvez définir allowNull en fonction de vos besoins
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('animals');
  }
};

