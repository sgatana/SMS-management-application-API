const { NO_CONTACTS } = require('../helpers/error')

module.exports = async db => {
  const contacts = await db.contacts.findAll({
    raw: true,
    attributes: ['name', 'phoneNumber']
  })
  console.log(contacts)
  if (!contacts.length) throw NO_CONTACTS
  return contacts
}
