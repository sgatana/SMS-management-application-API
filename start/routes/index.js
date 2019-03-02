const Router = require('koa-router')
const {BASE_URL} = require('../../lib/helpers/constants')
const ContactController = require('../../controllers/ContactController')
const MessageController = require('../../controllers/MessageController')


const routes = new Router({
  prefix: BASE_URL
})

// contact endpoints
routes.post('/contacts', ContactController.createContact)
routes.get('/contacts', ContactController.listContacts)
routes.get('/contacts/:contactId', ContactController.getContact)
routes.delete('/contacts/:phoneNumber', ContactController.deleteContact)

// message endpoints
routes.post('/messages/:contactId/sms', MessageController.createMessage)
routes.get('/messages', MessageController.getAllMessages)
routes.get('/messages/:contactId/sent', MessageController.getSentMessages)
routes.get('/messages/:contactId/received', MessageController.getReceivedMessages)

module.exports = routes