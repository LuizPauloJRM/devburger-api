'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        // Name of the user
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        // Email of the user
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        // Password of the user cryptographed
        type: Sequelize.STRING,
        allowNull: false,
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false, // Default value is false
      },
      created_at: {
        // Date of creation of the user
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        // Date of last update of the user
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  },
};
