const { rateLimit } = require('express-rate-limit')

exports.customRateLimit = (app) => {
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000,
        limit: 100,
        standardHeaders: 'draft-7',
        legacyHeaders: false,
    }))
}