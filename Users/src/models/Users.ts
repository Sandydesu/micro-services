import UserModelSchema from '../schema/Users';
import md5 from 'md5';
import jwt from 'jsonwebtoken';
export class UsersModel {
    private UserSchema = UserModelSchema;
    get(params = {}, callback) {
        this.UserSchema.find(params, callback);
    }

    getById(id, callback) {
        this.UserSchema.findOne({ _id: id }, callback);
    }

    create(body, callback) {
        body.password = md5(body.password);
        const product = new this.UserSchema(body);
        product.save(callback);
    }

    update(body, callback) {
        this.UserSchema.findOneAndUpdate({ _id: body._id }, body, { upsert: true }, callback);
    }

    delete(id, callback) {
        this.UserSchema.findOneAndRemove({ _id: id }, callback);
    }

    login(data, callback) {
        this.UserSchema.findOne({ user_name: data.user_name, active: true }, function (err, user) {
            if (err) {
                callback(err, null);
            } else {
                if (user) {
                    if (user.password === md5(data.password)) {
                        jwt.sign(JSON.stringify(user), 'sandy', function (err, token) {
                            callback(err, { message: "sucess", token: token });
                        });
                    } else {
                        callback(null, { message: 'Password Incorerect' });
                    }
                } else {
                    callback(null, { message: "Your are not registred or your account is deactivated" });
                }

            }
        });
    }
}