import { ProductModel } from '../models/Product';

export class ProductController {

    getAllProducts(req, res) {
        const pm = new ProductModel();
        pm.get((err, success) => {
            if (err) {
                return res.send(err);
            }
            res.status(200).send(success);
        });
    }

    getProduct(req, res) {
        const pm = new ProductModel();
        pm.getById(req.params.id, (err, success) => {
            if (err) {
                return res.send(err);
            }
            res.status(200).send(success);
        });
    }
}