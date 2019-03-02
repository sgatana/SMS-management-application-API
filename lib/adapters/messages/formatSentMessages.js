const moment = require('moment');

module.exports = async (db, sentMessages) => {
  const formattedMessages = Promise.all(sentMessages.map(async sentMessage => {
    const message = sentMessage.toJSON();
    const sender = await db.contacts.findById(message.senderId, {raw: true})
    const { receiver } = message;
    message.sentBy = `${sender.name}, contact: ${sender.phoneNumber}`
    message.sentTo = `${receiver.name}, contact ${receiver.phoneNumber}`;
    // message.contact = receiver.phoneNumber;
    message.sentOn = moment(message.createdAt).format('YYYY-MM-DD');
    delete message.senderId
    delete message.receiver;
    delete message.createdAt;
    return message;
  })
  );
  return formattedMessages;
};
