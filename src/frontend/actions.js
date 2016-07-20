const serverApi = require("./serverApi");
const _ = require("lodash");

const ActionType = {
  FILTER_LIST: "FILTER_LIST",
  LOAD_CITY_LIST_START: "LOAD_CITY_LIST_START",
  LOAD_CITY_LIST_SUCCESS: "LOAD_CITY_LIST_SUCCESS",
  LOAD_CITY_LIST_FAIL: "LOAD_CITY_LIST_FAIL"
};

/**
 * Создает дейсвтие с указанным типом и проставляет значения полей из опционального параметра дата.
 * Применение action("TYPE1", {id: 1, value: 42}) превратится в {type: "TYPE1", id: 1, value: 42}
 * @param  {string} type Тип действия
 * @param  {Object} data данные для дейсвтия, могут отсутствовать. Если заданы - проводится низкое копирвоание в объект action
 * @return {Object}      дейсвтие для redux - тип и данные
 */
function action( type, data ) {
  var res = {
    type
  };
  if ( data ) {
    return _.assign( res, data );
  }
  return res;
}

//пример использования:
function loadCityList() {
  return function( dispatch ) {
    dispatch( action( ActionType.LOAD_CITY_LIST_START ) );

    return serverApi.loadCityList( )
      .then( data => dispatch( action( ActionType.LOAD_CITY_LIST_SUCCESS, { data } ) ) )
      .catch( processErrorHandler( dispatch, "Error at loading city list", ActionType.LOAD_CITY_LIST_FAIL ) );
  }
}

/**
 * Генератор обработчиков ошибок.
 * Поднимает событие переданного типа, простав в него информацию об ошибке {errCaption, error}, где errCaption -
 * общая инфомрация о месте ошибки, котора яможет использоваться при отображении информации.
 * В данные для действия так же сливаются значения из дополнительного объекта data, которым можно предать доп. информацию.
 * @param  {[type]} dispatch       из redux
 * @param  {string} label          метка для события отображения ошибки.
 * @param  {string} failActionType тип действия-ошибки
 * @param  {Object} data           данные для действия
 * @return {function}              метод, генерирующий синхронные события о ошибке
 */
function processErrorHandler( dispatch, errCaption, failActionType, data ) {
  return function( error ) {
    console.error( "error on " + errCaption, error );
    var actionParams = {
      error,
      errCaption
    };
    if ( data ) {
      actionParams = _.assign( actionParams, data );
    }
    dispatch( action( failActionType, actionParams ) );
  }
}

const filter = ( text ) => {
  return { type: ActionType.FILTER_LIST, filter: text }
};

module.exports = {
  ActionType,
  filter,
  loadCityList
}
