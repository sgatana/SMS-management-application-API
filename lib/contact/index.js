const createContact = require('./createContact')
const getContact = require('./getContact')
const deleteContact = require('./deleteContact')


class ContactRepository{
  static createContact(db, contact){
    return createContact(db, contact)
  }
  static getContact(db, id){
    return getContact(db, id)
  }
  static deleteContact(db, phoneNumber){
    return deleteContact(db, phoneNumber)
  }
}

module.exports = ContactRepository