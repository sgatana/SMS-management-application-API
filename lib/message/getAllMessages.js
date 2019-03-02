module.exports = async db => {
  const messages = await db.sms.findAll({ raw: true})
  return messages
}