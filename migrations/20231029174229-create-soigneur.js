'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Soigneurs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false, // Vous pouvez définir allowNull en fonction de vos besoins
      },
      prenom: {
        type: Sequelize.STRING,
        allowNull: false, // Vous pouvez définir allowNull en fonction de vos besoins
      },
      specialty: {
        type: Sequelize.STRING,
        allowNull: true, // Vous pouvez définir allowNull en fonction de vos besoins
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false, // Vous pouvez définir allowNull en fonction de vos besoins
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false, // Vous pouvez définir allowNull en fonction de vos besoins
      },
      mail: {
        type: Sequelize.STRING,
        allowNull: false, // Vous pouvez définir allowNull en fonction de vos besoins
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
    await queryInterface.dropTable('Soigneurs');
  }
};

