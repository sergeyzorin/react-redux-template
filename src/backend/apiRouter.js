var express = require( 'express' );
var router = express.Router();

//простые обертки для классических случаев запроса-ответа.
const sendResult = action => ( req, res ) => res.send( action() );
const sendResultForId = action => ( req, res ) => res.send( action( req.params.id ) );

router.get( "/test", function( req, res ) {
  res.send( "just a test" );
} )

router.get( "/test4", function( req, res ) {
  res.send( delayedGetData( "new promised message" ) );
} )


router.get( "/test2", sendResult( getData ) );
router.get( "/test3", sendResult( delayedGetData ) );

function getData( message ) {
  return { id: 1, text: message || "just a test" };
}

function delayedGetData( message ) {
  return new Promise( function( resolve, reject ) {
    setTimeout( () => resolve( getData( message || "promised message" ) ), 1500 );
  } );
}


module.exports = router;
