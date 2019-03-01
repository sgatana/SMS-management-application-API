module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contacts', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true
      },
      name: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING,
        field: 'phone_number',
        unique: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contacts');
  }
};