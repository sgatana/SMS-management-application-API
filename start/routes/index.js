const Router = require('koa-router')
const ContactController = require('../../controllers/ContactController')
const MessageController = require('../../controllers/MessageController')
const routes = new Router()

routes.post('/api/contact', ContactController.createContact)
routes.post('/api/message', MessageController.createMessage)
routes.get('/api/message', MessageController.getAllMessages)
routes.get('/api/message/:id/sent', MessageController.getSentMessages)


module.exports = routes