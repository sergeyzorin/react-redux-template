const fetch = require( "isomorphic-fetch" );

module.exports = {
  loadCityList: getJson.bind( null, "/api/cities" ),
  createCity: name => postAndRecieveJson( "/api/cities", { name } )
}

//helper functions
//get JSON data from server
function getJson( url ) {
  return fetch( url )
    .then( getResponseText )
    .then( parseJson );
}
//вызвать серверный метод через POST
function postAndRecieveJson( url, payload ) {
  return fetch( url, buildJsonOptions( "post", payload ) )
    .then( getResponseText )
    .then( parseJson );
}
//вызвать серверный метод через PUT
function putAndRecieveJson( url, payload ) {
  return fetch( url, buildJsonOptions( "put", payload ) )
    .then( getResponseText )
    .then( parseJson );
}

function buildJsonOptions( method, payload ) {
  let options = { method: method || "post" };
  if ( payload ) {
    options.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    options.body = JSON.stringify( payload );
  }
  return options;
}

//вызвать серверный метод с единственным параметром "id" в адресе
function putByIdAndRecieveJson( url, id, payload ) {
  return putAndRecieveJson( url + "/" + id, payload );
}

function parseJson( text ) {
  return JSON.parse( text );
}

function getResponseText( response ) {
  if ( response.status >= 400 ) {
    throw new Error( "Bad response from server" );
  }
  return response.text();
}
