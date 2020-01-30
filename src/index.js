const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const {port} = require('./config')

// settings
app.set('port', process.env.port || port)

//middleware
app.use(logger('dev'));
app.use(bodyParser.json({ limit:'50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit:'50mb'}));


// error handler
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


//routes
app.use('/api/', require('./routes'))


app.listen(app.get('port'), () => {console.info(`server runing at port: ${app.get('port')}`)})
