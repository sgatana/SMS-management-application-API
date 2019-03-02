const ContactRepository = require('../lib/contact')

class ContactController {
  static async createContact(ctx) {
    try {
      const contact = ctx.request.body
      await ContactRepository.createContact(ctx.db, contact)
      ctx.body = {}
    } catch (error) {
      ctx.body = {
        error: error.message
      }
    }
  }
  static async getContact(ctx) {
    try {
      const { params } = ctx
      const contact = await ContactRepository.getContact(ctx.db, params.id)
      ctx.body = {
        contact
      }
    } catch (error) {
      ctx.body = {
        error: error.message
      }
      ctx.status = error.status || 500
    }
  }
}
module.exports = ContactController
