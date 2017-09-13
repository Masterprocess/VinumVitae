// DEPENDENCIES
// -------------------------------------------------------------
const express = require('express');
const app = express();
const hdbs = require('express-handlebars');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const path = require('path');
//const http = require('http');
const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
const db = require('./app/models');
const fs = require('fs');
const sequelize_fixtures = require('sequelize-fixtures');

// External Logic
// -------------------------------------------------------------


// INITIALIZING SERVER
// -------------------------------------------------------------
const port = process.env.PORT || 8080;

app.engine('handlebars', hdbs({
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname ,'app/views/layouts')
}));

app.set('view engine','handlebars');
app.set('views', path.join(__dirname,'app/views/'));    
// app.set('trust proxy', 1) // trust first proxy 
app.use(cookieParser('vino forever')) 
app.use(session({
    secret: 'vino forever',
    resave: false,
    saveUninitialized: false
}))

// Init passport authentication 
app.use(passport.initialize());
// persistent login sessions 
app.use(passport.session());

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'/app/public/')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// INTIALIZING ROUTERS
// -------------------------------------------------------------
app.use('/', require(path.join(__dirname,'./app/routes/htmlController.js')));
app.use('/users', require(path.join(__dirname,'./app/routes/loginController.js')));


// STARTING DB AND SERVER
// -------------------------------------------------------------

/*db.sequelize.sync(
    // {force: true}   
).then(() => {*/
    app.listen(port, () => {
        console.log('listen to port',port)
    })