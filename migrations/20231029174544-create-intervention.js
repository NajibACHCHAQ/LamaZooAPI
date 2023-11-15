'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Interventions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false, // Vous pouvez définir allowNull en fonction de vos besoins
      },
      animalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      veterinaireId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      soigneurId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      designation: {
        type: Sequelize.STRING,
        allowNull: true, // Vous pouvez définir allowNull en fonction de vos besoins
      },
      description: {
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
    await queryInterface.dropTable('interventions');
  }
};

