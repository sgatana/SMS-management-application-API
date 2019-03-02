'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sms', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true
      },
      message:{ 
        type:Sequelize.STRING
      },
      senderId:{
        type: Sequelize.STRING,
        field: 'sender_id',
        references: {
          model: 'contacts',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      receiverId: {
        type: Sequelize.STRING,
        field: 'receiver_id',
        references: {
          model: 'contacts',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      status: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('sms');
  }
};