const createMessage = require('./createMessage')
const getAllMessages = require('./getAllMessages')
const getSentMessages = require('./getSentMessages')
const getRecievedMessages = require('./getRecievedMessages')

class MessageRepository{
  static createMessage(db, message){
    return createMessage(db, message)
  }
  static getAllMessages(db){
    return getAllMessages(db)
  }
  static getSentMessages(db, id){
    return getSentMessages(db, id)
  }
  static getRecievedMessages(db, id){
    return getRecievedMessages(db, id)
  }
}
module.exports = MessageRepository