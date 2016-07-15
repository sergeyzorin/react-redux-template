const ActionTypes = require("../actions").ActionTypes;

//этот код надо вынести в отдельный файл в реальном проекте
function citiesReducer(state, action) {
  if (!state) {
    state = { filter: "", names: ['Moscow', 'Voronezh', 'Samara', 'Tomsk', 'Omsk'] };
  };
  switch (action.type) {
    case ActionTypes.FILTER_LIST:
      return Object.assign({}, state, { filter: action.filter });
      break;
    default:
      return state;
  }
}

module.exports = require("redux").combineReducers({
	cities: citiesReducer
});
