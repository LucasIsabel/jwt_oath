import AuthService from '../services/AuthService'
import Status from '../glogal/enum'

const {
    OK
} = Status.httpStatus;

const authService = new AuthService();

class AuthController {

    signIn = async (req, res) => {
        // this method was added just to test
        const result = await authService.verifiyAuthentatication();
        res.status(OK).send(result);
    }

    signOut = async (req, res) => {
        res.status(OK).send({});
    }

    secret = async (req, res) => {
        res.status(OK).send({})
    }

}

export default AuthController;