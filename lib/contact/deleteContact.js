const getContact = require('./getContact')

module.exports = async (db, phoneNumber) => {
  const contact = await getContact(db, phoneNumber)
  await db.contacts.destroy({
    where: {
      id: contact.id
    }
  })
}