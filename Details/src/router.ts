import express from 'express';
import { DetailsController } from './controles/Details';
import { validateUser } from './utils/MiddleWare';
const dc = new DetailsController();
const router = express.Router();

router.get('/', dc.getAllProducts.bind(this));
router.get('/:id', dc.getProduct.bind(this));
router.post('/', validateUser, dc.createProducts.bind(this));
router.put('/:id', validateUser, dc.updateProducts.bind(this));
router.delete('/:id', validateUser, dc.deleteProduct.bind(this));

export default router;

