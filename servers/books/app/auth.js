const jwt = require("jsonwebtoken");

exports.validateWebToken = (req, res, next) => {

    const token = req.body.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "A token is required for this request." });
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send({ message: "Token is invalid" });
    }

    return next();
}