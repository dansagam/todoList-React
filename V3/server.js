const   path        = require('path'),
        express     = require('express'),
        app         = express(),
        seedDB      = require('./config/dB'),
        morgan      = require('morgan'),
        colors      = require('colors'),
        dotenv      = require('dotenv'),
        PORT        = process.env.PORT || 5000;

dotenv.config({path: './config/config.env'})
seedDB();