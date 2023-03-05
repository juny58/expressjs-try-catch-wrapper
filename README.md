## What is this package about?
This a package which handles expressjs's try-catch block for developer working as a global function, which will help developers. It also returns the res.send in case of success and sends error status if fails

## Usage
```
const tryCatchWrapper = require('expressjs-try-catch-wrapper');
const User = require('./models/user');
const router = require('express').Router();

router.get('/users', (req, res, next) => {
    // This function runs inside try catch under the hood so we don't need to
    // It also returns the res.send in case of success and sends error status if fails
    tryCatchWrapper(async () => {
        const users = await User.find({});
        return users;
    }, req, res, next);
});

module.exports = router;
```

## Params
It needs the function as the first param, the request object as second, response as the third. Fourth is the next handler which is optional.

### Request
The ExpressJs request object

### Response
The ExpressJs response object

### Next
The ExpressJs next handler (Optional)
