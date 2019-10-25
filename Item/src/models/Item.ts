import ItemModelSchema from '../schema/Item';

export class ItemModel {
    private ItemSchema = ItemModelSchema;
    get(params = {}, callback) {
        this.ItemSchema.find(params, callback);
    }

    getById(id,callback){
        this.ItemSchema.findOne({_id:id}, callback);
    }

    create(body, callback) {
        const product = new this.ItemSchema(body);
        product.save(callback);
    }

    update(body, callback) {
        this.ItemSchema.findOneAndUpdate({ _id: body._id }, body, { upsert: true }, callback);
    }

    delete(id, callback) {
        this.ItemSchema.findOneAndRemove({ _id: id }, callback);
    }
}