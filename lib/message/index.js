const createMessage = require('./createMessage')
const getAllMessages = require('./getAllMessages')
const getSentMessages = require('./getSentMessages')

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
}
module.exports = MessageRepository