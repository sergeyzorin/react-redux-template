var express = require( 'express' );
var router = express.Router();

let cities = [ 'Moscow', 'Voronezh', 'Samara', 'Tomsk', 'Omsk', 'Tula', 'Krasnodar' ];

router.get( "/cities", function( req, res ) {
   res.send( cities );
} );

router.post( "/cities/", function( req, res ) {
  console.log( "post on cities", req.body );
  cities.push( req.body.name );
  res.send( { result: "ok" } );
  //TODO: send Created status
} );

router.put( "/cities/:id", function( req, res ) {
  console.log( "put on cities", req.params.id, req.body );
  cities.push( req.body.name );
  res.send( { result: "ok", id: req.params.id } );
} );

module.exports = router;
