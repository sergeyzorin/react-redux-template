"use strict";
var basePath = __dirname + '/../../public/';
var port = 4000;

var express = require( 'express' );
var app = express();
const middlewares = require( "./middlewares" );
// var bodyParser = require( 'body-parser' );
// app.use( bodyParser.json() ); // support json encoded bodies
// app.use( bodyParser.urlencoded( { extended: true } ) ); // support encoded bodies

//session and auth
//const session = require("express-session" );
//app.use( session({resave: false, secret: "big one", saveUninitialized: false}) );
//middlewares
app.use( middlewares.logRequest );
app.use( middlewares.logErrors );
app.use( middlewares.promiseify );
// app.use( "/", middlewares.delay );

app.use( '/public', express.static( basePath ) );
app.use( "/api", require( "./apiRouter" ) );

app.listen( port, function() {
  console.log( 'Example app listening on port ' + port + '!' );
} );
