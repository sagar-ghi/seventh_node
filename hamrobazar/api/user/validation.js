import Joi from 'joi'

export const userSchema = Joi.object({
    email: Joi.string().email().required(),
    address: Joi.string().min(15),
    firstName: Joi.string().min(5).required(),
    lastName: Joi.string().min(5).required(),
    role: Joi.string().valid('admin', 'moderator'),
    password: Joi.string().alphanum().min(8).required(),
    phone: Joi.number().min(7).max(9)
})

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(8).required(),

})