process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();

// Require your routes file
var indexRouter = require('./app/routes/index.server.routes');

// Use your routes as middleware
app.use('/', indexRouter);

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');
