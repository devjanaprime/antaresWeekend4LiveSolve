// requires
var express = require( 'express' );
var app = express();
var index = require( '../modules/routes/index.js' );
// globals
var port = process.env.PORT || 3313; // send flowers
// uses
app.use( express.static( 'public' ) );
app.use( '/', index );
// spin up server
app.listen( port, function(){
  console.log( 'server up on:', port );
}); //end server up
