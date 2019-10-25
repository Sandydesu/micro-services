import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ItemModelSchema = mongoose.model('items', new Schema({
    name: String,
    model: String,
    discription: String,
}));
export default ItemModelSchema;