const createContact = require('./createContact')

class ContactRepository{
  static createContact(db, contact){
    return createContact(db, contact)
  }
}

module.exports = ContactRepository