const config = require('../config');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized: No API token provided'
        });
    }

    // Extract token from "Bearer {token}" format
    const tokenMatch = authHeader.match(/Bearer\s+(.*)$/i);

    if (!tokenMatch) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized: Invalid token format'
        });
    }

    const token = tokenMatch[1];

    if (token !== config.security.apiToken) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized: Invalid API token'
        });
    }

    next();
};

module.exports = { verifyToken };