import { body, validationResult } from 'express-validator'

export const handlesInputErrors = (req, res, next) => {
    const errors = validationResult(req)
    console.log("ERRORS: ", errors)
    if (!errors.isEmpty()) {
        res.status(400);
        res.json({ errors: errors.array() });
    }  else {
        next()
    }
}