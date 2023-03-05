## What is this package about?
This is a package which handles expressjs's try-catch block working as a global function, which will help developers write cleaner code inside CRUD functions. Normally we'd have to write try catch for each function so that in case of failure, the error is handled. But with this package, it exposes a default function that you can wrap your function inside and it handles the success and error under the hood helping you not write try catch throughout the app. It also returns the res.send in case of success and sends error status if fails.

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
It needs the function as the first param, the request object as second, response as the third. Fourth is the next handler which is optional and required if you wish to use a next handler and employed one in your expressjs project.

### Function
The actual function you want to run inside, without returning res.send(). Just return the value you want to send as the response. The return type can be anything. It can be an async function or syncronous.

### Request
The ExpressJs request object

### Response
The ExpressJs response object

### Next
The ExpressJs next handler (Optional)

## Git
[Check out the git hub repo here.](https://github.com/juny58/expressjs-try-catch-wrapper)
