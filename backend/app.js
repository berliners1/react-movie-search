const express = require('express');

const routes = require('./routes');

const app = express();

//set up routes
app.use('/api', routes);

//listen on port 5000
app.listen(5000);