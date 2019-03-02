const error = require('../helpers/error')

module.exports = async (db, id) => {
  const contact = await db.contacts.findById(id, { raw: true }, )
  if(!contact) throw error.CONTACT_NOT_FOUND
  return contact
}
