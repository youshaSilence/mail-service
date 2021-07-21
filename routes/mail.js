/* eslint-disable newline-per-chained-call */
const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const controllers = require('../controllers');

const router = Router();

router.post(
    '/send/',

    body('recipient').isEmail().normalizeEmail(),
    body('text').not().isEmpty().trim().escape(), // TODO Есть макс значение?
    body('subject').not().isEmpty().trim().escape(), // TODO Какое макс значение?
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }

        return next();
    },

    controllers.mail.sendMail,
);

module.exports = router;
