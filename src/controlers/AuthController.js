class AuthController {
    static async sendAnswer(req, res, next) {
        // this method was added just to test
        const result = await Promise.resolve({ ok: 200})
        res.status(200).send(result)
    }
}

export default AuthController;