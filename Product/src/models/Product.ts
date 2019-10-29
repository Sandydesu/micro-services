import { RequestWrapper } from '../utils/RequestWrapper';
import * as _ from 'lodash';
export class ProductModel {
    get(callback) {
        const rc = new RequestWrapper();
        const item = rc.makeRequestForGetItems();
        const details = rc.makeRequestForGetDetails();
        Promise.all([item, details])
            .then(function (response) {
                const [itemsList, details] = response;
                const product = itemsList.map((value) => {
                    const list = {
                        details: []
                    };
                    list.details = _.filter(details, { product_id: value._id });
                    return { ...list, ...value };
                });
                callback(null, product);
            }, function (err) {
                callback(err, []);
            });
    }

    async getById(id, callback) {
        const rc = new RequestWrapper();
        try {
            const details = await rc.makeRequestForGetDetail(id);
            const item = await rc.makeRequestForGetItem(details.product_id);
            callback(null, { ...item, details: details });
        } catch (e) {
            callback(e, null);
        }
    }
}