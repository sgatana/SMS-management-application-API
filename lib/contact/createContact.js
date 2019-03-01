const pushid = require('pushid')
module.exports = async(db, contact) => {
  contact.id = pushid()
  console.log('======', contact)
  await db.contacts.create(contact)
}