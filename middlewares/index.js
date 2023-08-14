const { registrationUserSchema } = require('../schemas/userValidation')

module.exports.validateUser = async (req, res, next) => {
  try {
    await registrationUserSchema.validate(req.body)
    return next()
  } catch (error) {
    res.statusCode = 500; // ......!
    res.send(error.message)
  }
}
