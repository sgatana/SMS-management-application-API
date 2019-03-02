const formatDate = require('../formatDate')

module.exports = async messages => {
  const formattedMessages = Promise.all(
    messages.map(async msg => {
      const message = msg.toJSON()
      const { receiver, sender } = message
      if (receiver) {
        message.sentTo = `${receiver.name}, contact ${receiver.phoneNumber}`
        message.sentOn = formatDate(message.createdAt)
        delete message.senderId
        delete message.receiver
        delete message.createdAt
        return message
      }
      message.sentFrom = `${sender.name}, contact ${sender.phoneNumber}`
      message.receivedOn = formatDate(message.createdAt)
      delete message.receiverId
      delete message.sender
      delete message.createdAt
      return message
    })
  )
  return formattedMessages
}
