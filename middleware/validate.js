const Joi = require('joi');

// validation schema
const vaidateRequest = (req, res, next) => {
  const schema = {
    email: Joi.string().email().required(),
    message: Joi.string().min(1).required(),
    image: Joi.string().min(1).required(),
  };

  const { error, value } = Joi.validate({
    email: req.body.email,
    message: req.body.message,
    image: req.body.image,
  }, schema);

  if (!error) return next();

  return next(error.name);
};


module.exports = vaidateRequest;

