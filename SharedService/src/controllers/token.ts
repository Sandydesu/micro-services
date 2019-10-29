import jwt from 'jsonwebtoken';

export class Token {
    validateToken(req, res) {
        if (req.body) {
            jwt.verify(req.body.token, 'sandy', function (err, decoded) {
                if (err) {
                    res.send({ message: err });
                } else {
                    res.send({ decoded: decoded });
                }
            });
        } else {
            res.send({ message: "invalid" });
        }
    }

    generateToken(req, res) {
        if (req.body) {
            jwt.sign(JSON.stringify(req.body), 'sandy', function (err, token) {
                if (err) {
                    res.send({ message: err });
                } else {
                    res.send({ token: token });
                }
            });
            
        } else {
            res.send({ message: "invalid" });
        }
    }
}