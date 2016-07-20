const React = require("react");

require("./filteredNameList.less");

var FilteredNameList = React.createClass({
  componentDidMount: function () {
    let onMount = this.props.onMount;
    if( onMount ){
      onMount();
    }
  },
  render: function () {
    let props = this.props;
    return <div className="panel panel-default namelist">
      <div className="panel-heading">City list</div>
      <div className="panel-body">
        <Filter {...props} />
        <NameList {...props} />
      </div>
    </div>;
  }
});

module.exports = FilteredNameList;

function Filter( props ) {
  let handleChange = event => props.onChange( event.target.value );
  return <div className="form-group">
    <input type="text" value={props.filterText} onChange={handleChange} className="form-control"/>
  </div>;
};


function NameList(props) {
  return <ul className="list-group namelist-results">
    {props.names.map(p => <li key={p} className="list-group-item namelist__item">{p}</li>)}
  </ul>;
}
