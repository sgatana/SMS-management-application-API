const error = require('../helpers/error')

module.exports = async (db, phoneNumber) => {
  const contact = await db.contacts.findOne({
    where: { phoneNumber },
    raw: true,
    attributes: ['id', 'name', 'phoneNumber']
  })
  if (!contact) throw  error.CONTACT_NOT_FOUND
  return contact
}
