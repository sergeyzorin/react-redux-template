# react-redux-template
Boiler plate to start new project with React and Redux. Set's up initial project structure and common files.

Just a basic project with setted up:
* webpack
* webpack dev server with hot reload
* babel with es6 and React support
* redux: presentation and container components, actions, reducers and initialized start page
* index page with added bootstrap and awesome-fonts CDN links
* backend server via expressjs with basic setup
* backed unit tests in mocha

planned:
* mocha unit tests for client code in browser

# backend server information
Backend is supposed to be a RESTful app service. For frontend development is used WebPack dev-server with hot-reload and setted up proxy to backend express-js.
{npm start}
will start only dev server for frontend development

{npm run startB}
will run both webpack dev server and backend server. Backen will be runned up via nodemon (auto-reload on change).
(you can rename it to 'start' if you always need active backend)
