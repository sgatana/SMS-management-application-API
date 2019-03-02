const pushid = require('pushid')

module.exports = async (db, message) => {
  message.id = pushid()
  message.receiverId = '-LZo_yfvnJstSDZOmrjj'
  message.senderId = '-LZs9hh-s57AT-xUkQJo'
  await db.sms.create(message)
}