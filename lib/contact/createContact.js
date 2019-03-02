const pushid = require('pushid')
const getContact = require('./getContact')
const { CONTACT_EXISTS } = require('../helpers/error')

module.exports = async (db, contact) => {
  const phoneNumber = await db.contacts.count({
    where: { phoneNumber: contact.phoneNumber }
  })
  if (phoneNumber > 0) throw CONTACT_EXISTS
  contact.id = pushid()
  await db.contacts.create(contact)
}
