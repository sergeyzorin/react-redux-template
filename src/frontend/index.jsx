const React = require('react');
const render = require('react-dom').render;
const Provider = require('react-redux').Provider;
const createStore = require('redux').createStore;
const applyMiddleware = require('redux').applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const IndexRedirect = require('react-router').IndexRedirect;
const routerHistory = require('react-router').hashHistory;

if( module.hot ) {//поддержка хот-релоад
  module.hot.accept();
}
const store = createStore(
  require('./reducers/index.js'),
  applyMiddleware(
    //require( 'redux-logger')(), // neat middleware that logs actions
    thunkMiddleware // lets us dispatch() functions
  )
);

const App = require('./containers/filteredNameList.js');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//вызов действий при старте (надо разобраться, м.б. лучш еэто делать в компоненте App в ComponentDidMount)
// const actions = require("./actions");
// store.dispatch( actions.getCategories( ) );
