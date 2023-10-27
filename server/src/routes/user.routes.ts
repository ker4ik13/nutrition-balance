import express from 'express';
// Controllers
import UserController from '../controllers/user.controller';

const router = express.Router();

// Обработка запросов Users
router.get('/users', UserController.getUsers);

export default router;