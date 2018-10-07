import express from 'express';
const router = express.Router();

// userController
import AuthController from '../controlers/AuthController';
const authController = new AuthController();

// routes related to Authentication
router.get('/signIn', authController.sendAnswer);
router.post('/signOut', authController.sendAnswer);
router.get('/secret', authController.sendAnswer);

export default router;