import express from 'express';
const router = express.Router();

// userController
import AuthController from '../controlers/AuthController'

// routes related to Authentication
router.get('/signIn', AuthController.sendAnswer);
router.post('/signOut', AuthController.sendAnswer);
router.get('/secret', AuthController.sendAnswer);

export default router;