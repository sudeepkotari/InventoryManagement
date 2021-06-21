const Joi = require('joi')

const authSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(2).required(),
  books: Joi.object()
})

module.exports = {
  authSchema,
}
