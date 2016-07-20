var connect = require( "react-redux" ).connect;
var actions = require( "../actions" );
//var selectors = require("../selectors");

function mapStateToProps( state ) {
  var filter = state.cities.filter || "";
  return {
    //items: selectors.getVisibleItems(state),
    names: state.cities.names.filter( n => n.toLowerCase().indexOf( filter.toLowerCase() ) >= 0 ),
    filterText: filter
  };
};

var dispatchMap = {
  onChange: actions.filter,
  onMount: actions.loadCityList
};

module.exports = connect( mapStateToProps, dispatchMap )( require( "../components/filteredNameList.jsx" ) );
