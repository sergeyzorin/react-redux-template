const moment = require( "moment" );
/**
 * allow send to response result of promise.
 * Usage is simple: app.get( "/details/:id", ( req, res ) => res.promiseSend( loadDetailsInPromise( req.params.id ) ) );
 * @param  {[type]}   request  [description]
 * @param  {[type]}   response [description]
 * @param  {Function} next     [description]
 * @return {[type]}            [description]
 */
function promiseify( request, response, next ) {
  var baseSend = response.send.bind( response );
  response.send = function( resultOrPromise ) {
    //TODO: normal check for promise
    if ( resultOrPromise.then ) {
      //promise
      resultOrPromise
        .then( result => response.send( result ) )
        .catch( error => {
          throw next( error )
        } )
    } else {
      return baseSend( resultOrPromise );
    }
  }
  next();
}

const logRequest = function( req, res, next ) {
  console.log( moment().format( "YYYY.MM.DD HH:mm:ss" ), 'requested', req.path, req.query );
  next();
};
const delay = function( req, res, next ) {
  setTimeout( function() {
    next();
  }, 1500 );
};

function logErrors( err, req, res, next ) {
  // console.error(err.stack);
  console.error( err );
  next( err );
}


module.exports = {
  promiseify,
  logRequest,
  delay,
  logErrors
}
