import actions from './app.actions'

export const addSuggestions = ({
  nextPageURL,
  suggestions,
  totalSuggestionsForQuery
}) => ({
  nextPageURL,
  suggestions,
  totalSuggestionsForQuery,
  type: actions.addSuggestions
})

export const clearSuggestions = () => ({
  type: actions.clearSuggestions
})

export const selectEmployee = ({employee = null}) => ({
  type: actions.selectEmployee,
  employee
})

export const setFetchError = ({hasError}) => ({
  type: actions.setFetchError,
  hasError
})

export const setNextPageFetching = ({isFetching}) => ({
  type: actions.setNextPageFetching,
  isFetching
})

export const setQueryFetching = ({isFetching}) => ({
  type: actions.setQueryFetching,
  isFetching
})

export const updateQuery = ({query}) => ({
  type: actions.updateQuery,
  query
})
