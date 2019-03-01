const Router = require('koa-router')
const ContactController = require('../../controllers/ContactController')
const routes = new Router()

routes.post('/', ContactController.createContact)

module.exports = routes