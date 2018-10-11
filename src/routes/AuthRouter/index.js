import express from 'express';
const router = express.Router();

// AuthController
import AuthController from '../../controlers/AuthController';
const authController = new AuthController();

// routes related to Authentication
router
  .route('/auth/signIn')
  .get(authController.sendAnswer);

router
  .route('/auth/signOut')
  .post(authController.sendAnswer);

router
  .route('/auth/secret')
  .get(authController.sendAnswer);

export default router;