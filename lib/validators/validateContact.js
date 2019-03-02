const { CONTACT_DOES_NOT_EXIST } = require('../helpers/error')

module.exports = async (db, contactId) => {
  const contact = await db.contacts.findById(contactId, { raw: true })
  if (!contact) throw CONTACT_DOES_NOT_EXIST
}
