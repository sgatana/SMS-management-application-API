const createContact = require('./createContact')
const getContact = require('./getContact')

class ContactRepository{
  static createContact(db, contact){
    return createContact(db, contact)
  }
  static getContact(db, id){
    return getContact(db, id)
  }
}

module.exports = ContactRepository