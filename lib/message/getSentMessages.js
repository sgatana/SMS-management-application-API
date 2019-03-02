const {MESSAGE_NOT_FOUND} = require('../helpers/error')
const validateContact = require('../validators/validateContact')
module.exports = async (db, senderId) => {
  await validateContact(db, senderId)
  const messages = await db.sms.findAll({
    where: { senderId },
    attributes: ['message', 'createdAt', 'senderId'],
    include: [
      {
        model: db.contacts,
        as: 'receiver',
        attributes: ['name', 'phoneNumber'],
      }
    ]
  });
  if(!messages.length) throw MESSAGE_NOT_FOUND
  return messages;
};
