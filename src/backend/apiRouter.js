var express = require( 'express' );
var router = express.Router();
var logic = require( "./logic" );

//простые обертки для классических случаев запроса-ответа.
const sendResult = action => ( req, res ) => res.send( action() );
const sendResultForId = action => ( req, res ) => res.send( action( req.params.id ) );

router.get( "/cities", sendResult( logic.promiseLoadCities ) );

module.exports = router;
