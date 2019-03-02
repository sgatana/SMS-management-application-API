const Router = require('koa-router')
const ContactController = require('../../controllers/ContactController')
const MessageController = require('../../controllers/MessageController')
const routes = new Router()

routes.post('/api/contacts', ContactController.createContact)
routes.get('/api/contacts/:id', ContactController.getContact)


routes.post('/api/messages', MessageController.createMessage)
routes.get('/api/messages', MessageController.getAllMessages)
routes.get('/api/messages/:id/sent', MessageController.getSentMessages)


module.exports = routes