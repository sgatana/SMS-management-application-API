const {MESSAGE_NOT_FOUND} = require('../helpers/error')
module.exports = async db => {
  const messages = await db.sms.findAll({ raw: true})
  if(!messages.length) throw MESSAGE_NOT_FOUND
  return messages
}