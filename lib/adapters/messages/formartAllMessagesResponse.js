const formatDate = require('../formatDate')

module.exports = async (db, messages) => {
  const formattedMessages = Promise.all(
    messages.map(async message => {
      const sender = await db.contacts.findById(message.senderId, {
        raw: true
      });
      const receiver = await db.contacts.findById(message.receiverId, {
        raw: true
      });
      message.sender = sender.name;
      message.receiver = receiver.name;
      message.date = formatDate(message.createdAt)
      delete message.createdAt
      delete message.updatedAt
      delete message.receiverId;
      delete message.senderId;
      delete message.id
      delete message.status

      return message
    })
  );
  return formattedMessages;
};
