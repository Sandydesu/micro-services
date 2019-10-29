import request from 'request';
const shared_service_url = process.env.SHARED_SERVICE_URL ? `${process.env.SHARED_SERVICE_URL}:3004` : 'localhost:3004';

export class JsonTokenWrapper {
    getToken(body, callback) {
        request({
            url: `http://${shared_service_url}/generate`,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        }, (err, success) => {
            callback(err, success)
        });
    }

    validateToken(token, callback) {
        request({
            url: `http://${shared_service_url}/validate`,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: token }),
        }, (err, success) => {
            callback(err, JSON.parse(success.body))
        });
    }
}



export const validateUser = (req, res, next) => {
    const token = req.header('x-access-token');
    const jtw = new JsonTokenWrapper();
    jtw.validateToken(token, (err, success) => {
        if (err) {
            res.send(err);
        } else {
            if (success && success.decoded) {
                req.decoded = success.decdecodedode;
                if (Object.keys(req.body).length === 0) {
                    return res.send({ message: 'Invalid entry' });
                }
                next();
            } else {
                res.send(success);
            }
        }
    });
}