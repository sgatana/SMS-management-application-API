module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define('contacts', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING
    },
    phoneNumber: {
      type: DataTypes.STRING,
      field: 'phone_number',
      unique: true,
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
    tablename: 'contacts'
  });
  contact.associate = function(models) {};
  return contact;
};