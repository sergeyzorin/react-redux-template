const ActionType = require( "../actions" ).ActionType;

//этот код надо вынести в отдельный файл в реальном проекте
function citiesReducer( state, action ) {
  if ( !state ) {
    state = { filter: "", names: [ 'Moscow', 'Voronezh' ] };
  };
  switch ( action.type ) {
    case ActionType.LOAD_CITY_LIST_SUCCESS:
      return Object.assign( {}, state, {names: action.data} );
    case ActionType.FILTER_LIST:
      return Object.assign( {}, state, { filter: action.filter } );
    default:
      return state;
  }
}

module.exports = require( "redux" ).combineReducers( {
  cities: citiesReducer
} );
