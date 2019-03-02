const Joi = require('joi')

const contactSchema = Joi.object().keys({
  name: Joi.string().required(),
  phoneNumber: Joi.string().regex(/^[0-9]+$/).length(10)
})

const messageSchema = {
  message: Joi.string().required(),
  receiverContact: Joi.string().regex(/^[0-9]+$/).length(10)
}

module.exports = {
  contactSchema,
  messageSchema
}