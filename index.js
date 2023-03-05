/**
 * Takes a function and runs inside Try catch block so that the developers won't have to do the sme every time,
 * They can just focus on main method
 * @param {Function} fn The function to run inside the try catch, consisting the lines of codes
 * @param {ExpressJsRequest} req ExpressJS request object
 * @param {ExpressJsResponse} res ExpressJS response object
 * @param {ExpresJSNextHandler} next ExpressJS next handler
 */
const wrapTryCatch = (fn, req, res, next = undefined) => {
    try {
        const result = fn();
        if (result instanceof Promise) {
            result.then((d) => {
                if (next) {
                    next(d);
                } else {
                    return res.send(d);
                }
            });
        } else {
            if (next) {
                next(result)
            } else {
                return res.send(result);
            }
        }
    } catch (err) {
        return res.status(400).send(err);
    }
};

module.exports = wrapTryCatch;