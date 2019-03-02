const MessageRepository = require('../lib/message');
const formatAllMessages = require('../lib/adapters/messages/formartAllMessagesResponse');
const formatSentMessages = require('../lib/adapters/messages/formatSentMessages')

class MessageController {
  static async createMessage(ctx) {
    const message = ctx.request.body;
    try {
      await MessageRepository.createMessage(ctx.db, message);
      ctx.body = {};
    } catch (error) {
      ctx.body = {
        error: error.message
      };
    }
  }
  static async getAllMessages(ctx) {
    try {
      const messages = await MessageRepository.getAllMessages(ctx.db);
      const formattedMessages = await formatAllMessages(ctx.db, messages);
      console.log(formattedMessages);
      ctx.body = {
        messages: formattedMessages
      };
    } catch (error) {
      console.log('formattedMessages');
      ctx.body = {
        error: error.message
      };
    }
  }
  static async getSentMessages(ctx) {
    try {
      const { params } = ctx;
      const messages = await MessageRepository.getSentMessages(
        ctx.db,
        params.id
      );
      const formattedMessages = await formatSentMessages(ctx.db, messages)
      ctx.body = { messages: formattedMessages }
    } catch (error) {
      console.log(error)
      ctx.body = {
        error: error.message
      }
    }
  }
}
module.exports = MessageController;
