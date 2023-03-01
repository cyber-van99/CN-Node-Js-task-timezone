const Joi = require('joi');

const tradeSchema = Joi.object({
    id: Joi.required(),
    type: Joi.string().valid('buy','sell').required(),
    user_id : Joi.required(),
    shares: Joi.number().greater(0).less(101).required(),
    price : Joi.number().greater(-1).required(),
    symbol: Joi.string().min(3).required()
})

const querySchema = Joi.object({
    type : Joi.string().valid('buy','sell'),
    user_id : Joi.number()
})

module.exports = {
    tradeSchema,
    querySchema
}