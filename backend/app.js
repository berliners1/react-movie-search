const express = require('express');

const routes = require('./routes');

const app = express();

app.use((req, res, next) => {
    res.setHeader(
        'Access-Control-Allow-Origin',
        'http://localhost:3000');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-Width, Content-Type, Accept, Authorization');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE');
    next();
});

//set up routes
app.use('/api', routes);

//listen on port 5000
app.listen(5000);