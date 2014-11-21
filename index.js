var _ = require('lodash')

function useFilter(swig, filter) {
  if (filter === undefined) {
    return Object.keys(_).forEach(function(action) {
      if (lodashHas(action))
        useFilter(swig, action)
    })
  } else if (Array.isArray(filter)) {
    filter.forEach(function(f) {
      useFilter(swig, f)
    })
  }

  if (lodashHas(filter))
    swig.setFilter(filter, _[filter])
  else
    throw new Error(filter + " is not a lodash function")
}

function lodashHas(functionName) {
  return (_[functionName] && typeof _[functionName] === 'function')
}

module.exports = {
  useFilter: useFilter
}
