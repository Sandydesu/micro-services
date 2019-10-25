import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const DetailsModelSchema = mongoose.model('itemdetails', new Schema({
    product_id: String,
    currency: Number,
    currency_type: String,
    color: String,
    ram_size: Number,
    ram_units: String,
    storage: Number,
    storage_units: String,
    highlights: new Array(),
    available: Boolean
}));
export default DetailsModelSchema;