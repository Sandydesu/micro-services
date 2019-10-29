import express from 'express';
import { Token } from './controllers/token';
const uc = new Token();
const router = express.Router();

router.post('/validate', uc.validateToken.bind(this));
router.post('/generate', uc.generateToken.bind(this));

export default router;

