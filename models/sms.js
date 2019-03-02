module.exports = (sequelize, DataTypes) => {
  const sms = sequelize.define('sms', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    message:{ 
      type:DataTypes.STRING
    },
    senderId:{
      type: DataTypes.STRING,
      field: 'sender_id'
    },
    receiverId: {
      type: DataTypes.STRING,
      field: 'receiver_id'
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
      
  }, {
    tablename: 'sms'
  });
  sms.associate = function(models) {
    sms.belongsTo(models.contacts, {
      as: 'sender',
      foreignKey: 'senderId'
    })
    sms.belongsTo(models.contacts, {
      as: 'receiver',
      foreignKey: 'receiverId'
    })
  };
  return sms;
};