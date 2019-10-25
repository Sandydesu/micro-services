import { UsersModel } from '../models/Users';

export class UserController {

    getAllUsers(req, res) {
        const dm = new UsersModel();
        dm.get(req.query, (err, success) => {
            if (err) {
                return res.send(err);
            }
            res.status(200).send(success);
        });
    }

    getUser(req, res) {
        const dm = new UsersModel();
        dm.getById(req.params.id, (err, success) => {
            if (err) {
                return res.send(err);
            }
            res.status(200).send(success);
        });
    }

    createUser(req, res) {
        const dm = new UsersModel();
        dm.create(req.body, (err, success) => {
            if (err) {
                return res.send(err);
            }
            res.status(201).send(success);
        });
    }

    updateUser(req, res) {
        const dm = new UsersModel();
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

    deleteUser(req, res) {
        const dm = new UsersModel();
        dm.delete(req.params.id, (err) => {
            if (err) {
                return res.send(err);
            }
            res.status(201).send({ message: "Successfully removed" });
        });

    }

    login(req, res) {
        const dm = new UsersModel();
        dm.login(req.body, (err, success) => {
            if (err) {
                return res.send(err);
            }
            res.status(200).send(success);
        });
    }
}