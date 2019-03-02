const pushid = require('pushid')
const getContact = require('../contact/getContact')

module.exports = async (db, message) => {
  message.id = pushid()
  contact = await getContact(db, message.receiverContact)
  message.receiverId = contact.id
  await db.sms.create(message)
}
