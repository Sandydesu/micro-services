import express from 'express';
import { ItemController } from './controles/Item';
import { validateUser } from './utils/MiddleWare';
const ic = new ItemController();
const router = express.Router();

router.get('/', ic.getAllItems.bind(this));
router.get('/:id', ic.getItem.bind(this));
router.post('/', validateUser, ic.createItem.bind(this));
router.put('/:id', validateUser, ic.updateItem.bind(this));
router.delete('/:id', validateUser, ic.deleteItem.bind(this));

export default router;

