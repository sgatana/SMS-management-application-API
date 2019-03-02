const Joi = require('joi')
const { messageSchema } = require('../lib/validators')
const MessageRepository = require('../lib/message')
const formatAllMessages = require('../lib/adapters/messages/formartAllMessagesResponse')
const formatSentMessages = require('../lib/adapters/messages/formatContactMessages')

class MessageController {
  static async createMessage(ctx) {
    const { params } = ctx
    const message = ctx.request.body
    const { error } = Joi.validate(message, messageSchema)
    message.senderId = params.contactId
    if (error) {
      ctx.status = 400
      ctx.body = {
        error: `validation error, please enter correct number`
      }
    return
    }
    try {
      await MessageRepository.createMessage(ctx.db, message)
      ctx.status = 201
      ctx.body = {
        message: 'message successfully sent'
      }
    } catch (error) {
      ctx.body = {
        error: error.message
      }
    }
  }
  static async getAllMessages(ctx) {
    try {
      const messages = await MessageRepository.getAllMessages(ctx.db)
      const formattedMessages = await formatAllMessages(ctx.db, messages)
      ctx.body = {
        messages: formattedMessages
      }
    } catch (error) {
      ctx.status = error.status | 400
      ctx.body = {
        error: error.message
      }
    }
  }
  static async getSentMessages(ctx) {
    try {
      const { params } = ctx
      const messages = await MessageRepository.getSentMessages(
        ctx.db,
        params.contactId
      )
      const formattedMessages = await formatSentMessages(messages)
      ctx.body = { 'sent messages': formattedMessages }
    } catch (error) {
      ctx.status = error.status | 400
      ctx.body = {
        error: error.message
      }
    }
  }
  static async getReceivedMessages(ctx) {
    try {
      const { params } = ctx
      const messages = await MessageRepository.getRecievedMessages(
        ctx.db,
        params.contactId
      )
      const formattedMessages = await formatSentMessages(messages)
      ctx.body = { 'received messages': formattedMessages }
    } catch (error) {
      ctx.status = error.status | 400
      ctx.body = {
        error: error.message
      }
    }
  }
}
module.exports = MessageController
