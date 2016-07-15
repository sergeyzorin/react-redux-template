const ActionTypes = {
  FILTER_LIST: "FILTER_LIST"
};

const filter = (text) => {
  return { type: ActionTypes.FILTER_LIST, filter: text }
};

module.exports = {
  ActionTypes,
  filter
}
