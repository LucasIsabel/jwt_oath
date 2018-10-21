import {
    LoginValidator
} from '../helpers/validators';
import Status from '../glogal/enum'

const {
    BAD_REQUEST
} = Status.httpStatus;

export default class JoiValidation {

    validateSign = (req, res, next) => {
        const errors = this.selectSchema('Login', req.body);
        if (errors !== null) return res.status(BAD_REQUEST).send(errors);
        next();
    }

    selectSchema = (schema, body) => {
        switch (schema) {
            case 'Login':
                {
                    const result = LoginValidator.validateBodyLogin(body);
                    return result.error;
                }
        }
    }
}