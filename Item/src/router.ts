import express from 'express';
import { ItemController } from './controles/Item';
const ic = new ItemController();
const router = express.Router();

router.get('/', ic.getAllItems.bind(this));
router.get('/:id', ic.getItem.bind(this));
router.post('/', ic.createItem.bind(this));
router.put('/:id', ic.updateItem.bind(this));
router.delete('/:id', ic.deleteItem.bind(this));

export default router;

