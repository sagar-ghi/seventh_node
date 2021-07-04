import Joi from 'joi'

export const userSchema = Joi.object({
    username: Joi.string().min(3).max(25),
    email: Joi.string().email().required(),
    phone: Joi.number().min(9).max(9)
})