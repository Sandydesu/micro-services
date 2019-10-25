import express from 'express';
import { UserController } from './controles/Users';
const uc = new UserController();
const router = express.Router();

router.get('/', uc.getAllUsers.bind(this));
router.get('/:id', uc.getUser.bind(this));
router.post('/', uc.createUser.bind(this));
router.post('/auth', uc.login.bind(this));
router.put('/:id', uc.updateUser.bind(this));
router.delete('/:id', uc.deleteUser.bind(this));

export default router;

