import AuthService from '../services/AuthService'
import Status from '../glogal/enum'

const {OK} = Status.httpStatus;

class AuthController {

  constructor() {
    this.authService = new AuthService();
  }

   sendAnswer = async (req, res, next) => {
    // this method was added just to test
    const result = await this.authService.verifiyAuthentatication();
    res.status(OK).send(result);
  }

}

export default AuthController;