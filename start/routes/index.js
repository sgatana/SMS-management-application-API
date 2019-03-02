const Router = require('koa-router')
const {BASE_URL} = require('../../lib/helpers/constants')
const ContactController = require('../../controllers/ContactController')
const MessageController = require('../../controllers/MessageController')
const routes = new Router({
  prefix: BASE_URL
})

routes.post('/contacts', ContactController.createContact)
routes.get('/contacts/:id', ContactController.getContact)
routes.delete('/contacts/:phoneNumber', ContactController.deleteContact)



routes.post('/messages/:contactId/sms', MessageController.createMessage)
routes.get('/messages', MessageController.getAllMessages)
routes.get('/messages/:contactId/sent', MessageController.getSentMessages)
routes.get('/messages/:contactId/received', MessageController.getReceivedMessages)



module.exports = routes