//just a test method
function loadCities() {
  return [ 'Moscow', 'Voronezh', 'Samara', 'Tomsk', 'Omsk', 'Tula' ];
}

function promiseLoadCities() {
  return Promise.resolve( loadCities() );
  // return new Promise( function( resolve, reject ) {
  //   setTimeout( () => resolve( loadCities ), delay || 1500 );
  // } );
}

module.exports = { loadCities, promiseLoadCities };
