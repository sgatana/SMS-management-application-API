const pushid = require('pushid')
const getContact = require('../contact/getContact')
const validateContact = require('../validators/validateContact')

module.exports = async (db, message) => {
  await validateContact(db, message.senderId)
  message.id = pushid()
  contact = await getContact(db, message.receiverContact)
  message.receiverId = contact.id
  await db.sms.create(message)
}
