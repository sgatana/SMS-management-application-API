const  ContactRepository = require('../lib/contact')

class ContactController{
  static async createContact(ctx){
    try{
      const contact = ctx.request.body
      await ContactRepository.createContact(ctx.db, contact)
      ctx.body = {}
    }catch(error){
      ctx.body = {
        error: error.message
      }
    }
  }
}
module.exports = ContactController  