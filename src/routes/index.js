import express from 'express';
const router = express.Router();

// userController
import AuthController from '../controlers/AuthController';
const authController = new AuthController();

// RouterHelper
import RouterHelper from '../helpers/routeHelpers';
const routerHelper = new RouterHelper();

// routes related to Authentication
router.post('/auth/signIn', routerHelper.validateSign, authController.signIn);
router.post('/auth/signOut', authController.signOut);
router.get('/auth/secret', authController.secret);

export default router;