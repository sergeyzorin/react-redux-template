var express = require( 'express' );
var router = express.Router();
var logic = require( "./logic" );

//простые обертки для классических случаев запроса-ответа.
const sendResult = action => ( req, res ) => res.send( action() );
const sendResultForId = action => ( req, res ) => res.send( action( req.params.id ) );

router.get( "/test", function( req, res ) {
  res.send( "just a test" );
} )

router.get( "/test4", function( req, res ) {
  res.send( logic.promiseMessage( "delayed message - 4" ) );
} )

router.get( "/test2", sendResult( logic.createMessage ) );
router.get( "/test3", sendResult( logic.promiseMessage.bind( null, "test3 - in promise" ) ) );

module.exports = router;
