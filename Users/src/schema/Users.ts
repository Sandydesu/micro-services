import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const UserModelSchema = mongoose.model('users', new Schema({
    user_name: String,
    password: String,
    name: String,
    age: Number,
    phone_number: Number,
    active: { type: Boolean, default: true },
    role: { type: String, default: 'customer' }
}));
export default UserModelSchema;