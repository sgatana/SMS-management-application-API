module.exports = async (db, senderId) => {
  console.log('senderId', senderId)
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
  return messages;
};
