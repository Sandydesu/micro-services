import request from 'request';
const shared_service_url = process.env.SHARED_SERVICE_URL ? `${process.env.SHARED_SERVICE_URL}:3004` : 'localhost:3004';

export const validateUser = (req, res, next) => {
    const token = req.header('x-access-token');
    request({
        url: `http://${shared_service_url}/validate`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: token }),
    }, (err, response) => {
        if (err) {
            res.send(err);
        } else {
            const success = JSON.parse(response.body);
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