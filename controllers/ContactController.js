const Joi = require('joi')
const ContactRepository = require('../lib/contact')
const { contactSchema } = require('../lib/validators')
class ContactController {
  static async createContact(ctx) {
    try {
      const contact = ctx.request.body
      const { error } = Joi.validate(contact, contactSchema)
      if (error) {
        ctx.status = 400
        ctx.body = {
          error: `validation error, please enter correct name and phone number`
        }
        return
      }
      await ContactRepository.createContact(ctx.db, contact)
      ctx.status = 201
      ctx.body = {
        message: `contact with phone number ${contact.phoneNumber} created successfully`
      }
    } catch (error) {
      ctx.status = error.status || 400
      ctx.body = {
        error: error.message
      }
    }
  }
  static async getContact(ctx) {
    try {
      const { params } = ctx
      const contact = await ContactRepository.getContact(ctx.db, params.id)
      ctx.status = 200
      ctx.body = {
        contact
      }
    } catch (error) {
      ctx.body = {
        error: error.message
      }
      ctx.status = error.status || 400
    }
  }
  static async deleteContact(ctx) {
    try {
      const { params } = ctx
      await ContactRepository.deleteContact(ctx.db, params.phoneNumber)
      ctx.body = {
        message: `contact with phone number ${params.phoneNumber} deleted successfully`
      }
    } catch (error) {
      ctx.status = error.status || 400
      ctx.body = {
        error: error.message
      }
    }
  }
}
module.exports = ContactController
