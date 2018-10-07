class AuthService {

    async verifiyAuthentatication() {
        return Promise.resolve({
            user: 'Lucas'
        });
    }

}

export default AuthService;