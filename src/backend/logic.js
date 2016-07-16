//just a test method
function createMessage( text ) {
  return { id: 1, message: text || "just a test message" };
}

function promiseMessage( text, delay ) {
  return new Promise( function( resolve, reject ) {
    setTimeout( () => resolve( createMessage( text || "promised message" ) ), delay || 1500 );
  } );
}

module.exports = { createMessage, promiseMessage };
