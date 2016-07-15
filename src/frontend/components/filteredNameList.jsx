const React = require("react");

require("./filteredNameList.less");

module.exports = function( props ) {
  return <div className="panel panel-default namelist">
    <div className="panel-heading">Список</div>
    <div className="panel-body">
      <Filter {...props} />
      <NameList {...props} />
    </div>
  </div>;
}

function Filter( props ) {
  let handleChange = event => props.onChange( event.target.value );
  return <div className="form-group">
    <input type="text" value={props.filterText} onChange={handleChange} className="form-control"/>
    {/*<button className="btn btn-default" onClick={handleChange}>Ok</button>*/}
  </div>;
};


function NameList(props) {
  return <ul className="list-group namelist-results">
    {props.names.map(p => <li key={p} className="list-group-item namelist__item">{p}</li>)}
  </ul>;
}
