import AuthService from '../services/AuthService'

class AuthController {

    async sendAnswer(req, res, next) {
        const authService = new AuthService()
        // this method was added just to test
        const result = await authService.verifiyAuthentatication()
        res.status(200).send(result)
    }

}

export default AuthController;