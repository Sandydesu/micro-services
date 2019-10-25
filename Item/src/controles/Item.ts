import { ItemModel } from '../models/Item';

export class ItemController {

    getAllItems(req, res) {
        const im = new ItemModel();
        im.get(req.query, (err, success) => {
            if (err) {
                return res.send(err);
            }
            res.status(200).send(success);
        });
    }

    getItem(req, res) {
        const im = new ItemModel();
        im.getById(req.params.id, (err, success) => {
            if (err) {
                return res.send(err);
            }
            res.status(200).send(success);
        });
    }

    createItem(req, res) {
        const im = new ItemModel();
        im.create(req.body, (err, success) => {
            if (err) {
                return res.send(err);
            }
            res.status(201).send(success);
        });
    }

    updateItem(req, res) {
        const im = new ItemModel();
        if (req.params.id) {
            req.body._id = req.params.id
        }
        im.update(req.body, (err) => {
            if (err) {
                return res.send(err);
            }
            res.status(206).send({ message: 'Successfully Updated!!!' });
        });
    }

    deleteItem(req, res) {
        const im = new ItemModel();
        im.delete(req.params.id, (err) => {
            if (err) {
                return res.send(err);
            }
            res.status(201).send({ message: "Successfully removed" });
        });

    }
}