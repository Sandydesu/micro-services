import express from 'express';
import { ProductController } from './controles/Product';
const pc = new ProductController();
const router = express.Router();

router.get('/', pc.getAllProducts.bind(this));
router.get('/:id', pc.getProduct.bind(this));

export default router;

