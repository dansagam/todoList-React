const   path        = require('path'),
        express     = require('express'),
        app         = express(),
        seedDB      = require('./config/dB'),
        dotenv      = require('dotenv'),
        morgan      = require('morgan'),
        colors      = require('colors'),
        PORT        = process.env.PORT || 5000;
dotenv.config({path: './config/config.env'})
seedDB();
const todos = require('./routes/todoRoutes');

// for the body parser  of routes
app.use(express.json())


if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use('/api/v3/todos', todos)
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('clients/build'))
}

app.listen(
    PORT, () => 
    console.log(`Todo app 
        ${process.env.NODE_ENV} listening on port ${PORT} 🔥 !`.yellow.bold )
)
