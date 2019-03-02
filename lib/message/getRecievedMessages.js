const {MESSAGE_NOT_FOUND} = require('../helpers/error')
const validateContact = require('../validators/validateContact')

module.exports = async (db, receiverId) => {
  await validateContact(db, receiverId)
  const messages = await db.sms.findAll({
    where: { receiverId },
    attributes: ['message', 'createdAt', 'receiverId'],
    include: [
      {
        model: db.contacts,
        as: 'sender',
        attributes: ['name', 'phoneNumber'],
      }
    ]
  });
  if(!messages.length) throw MESSAGE_NOT_FOUND
  return messages;
};
