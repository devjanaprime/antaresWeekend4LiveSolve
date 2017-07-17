// requires
var express = require( 'express' );
var router = express.Router();
var path = require( 'path' );
// routes
router.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'public/views/index.html' ) );
}); // end base url
// module.exports
module.exports = router;
