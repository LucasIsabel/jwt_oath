import Joi from 'joi';

export default class LoginValidator {
    static validateBodyLogin = (body) => {
        const schema = Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
        return Joi.validate(body, schema);
    }
}