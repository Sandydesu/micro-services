import { DetailsModel } from '../models/Details';

export class DetailsController {

    getAllProducts(req, res) {
        const dm = new DetailsModel();
        dm.get(req.query, (err, success) => {
            if (err) {
                return res.send(err);
            }
            res.status(200).send(success);
        });
    }

    getProduct(req, res) {
        const dm = new DetailsModel();
        dm.getById(req.params.id, (err, success) => {
            if (err) {
                return res.send(err);
            }
            res.status(200).send(success);
        });
    }

    createProducts(req, res) {
        const dm = new DetailsModel();
        dm.create(req.body, (err, success) => {
            if (err) {
                return res.send(err);
            }
            res.status(201).send(success);
        });
    }

    updateProducts(req, res) {
        const dm = new DetailsModel();
        if (req.params.id) {
            req.body._id = req.params.id
        }
        dm.update(req.body, (err) => {
            if (err) {
                return res.send(err);
            }
            res.status(206).send({ message: 'Successfully Updated!!!' });
        });
    }

    deleteProduct(req, res) {
        const dm = new DetailsModel();
        dm.delete(req.params.id, (err) => {
            if (err) {
                return res.send(err);
            }
            res.status(201).send({ message: "Successfully removed" });
        });

    }
}