import express from 'express';
import { DetailsController } from './controles/Details';
const dc = new DetailsController();
const router = express.Router();

router.get('/', dc.getAllProducts.bind(this));
router.get('/:id', dc.getProduct.bind(this));
router.post('/', dc.createProducts.bind(this));
router.put('/:id', dc.updateProducts.bind(this));
router.delete('/:id', dc.deleteProduct.bind(this));

export default router;

