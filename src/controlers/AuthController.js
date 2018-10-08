import AuthService from '../services/AuthService'
import Status from '../glogal/enum'

const { OK } = Status.httpStatus;
const authService = new AuthService();

class AuthController {

    async sendAnswer(req, res, next) {
        // this method was added just to test
        const result = await authService.verifiyAuthentatication()
        res.status(OK).send(result)
    }

}

export default AuthController;