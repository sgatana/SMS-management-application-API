const Koa = require('koa')
const routes = require('./routes')
const db = require('../models')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
app.context.db = db
app.use(bodyParser())
app.use(routes.routes())

module.exports = app
