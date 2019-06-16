import express from 'express';
import userController from '../controller/todo';

const router = express.Router();

router.post('/todo', userController.createTodo);

export default router;
