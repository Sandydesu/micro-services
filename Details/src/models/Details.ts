import DetailsModelSchema from '../schema/Details';

export class DetailsModel {
    private DetailsSchema = DetailsModelSchema;
    get(params = {}, callback) {
        this.DetailsSchema.find(params, callback);
    }

    getById(id, callback) {
        this.DetailsSchema.findOne({ _id: id }, callback);
    }

    create(body, callback) {
        const product = new this.DetailsSchema(body);
        product.save(callback);
    }

    update(body, callback) {
        this.DetailsSchema.findOneAndUpdate({ _id: body._id }, body, { upsert: true }, callback);
    }

    delete(id, callback) {
        this.DetailsSchema.findOneAndRemove({ _id: id }, callback);
    }
}