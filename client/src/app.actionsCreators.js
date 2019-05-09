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

export const updateQuery = ({query}) => ({
  type: actions.updateQuery,
  query
})

export const selectEmployee = ({employee = null}) => ({
  type: actions.selectEmployee,
  employee
})

export const setQueryFetching = ({isFetching}) => ({
  type: actions.setQueryFetching,
  isFetching
})

export const setNextPageFetching = ({isFetching}) => ({
  type: actions.setNextPageFetching,
  isFetching
})

export const setFetchError = ({hasError}) => ({
  type: actions.setFetchError,
  hasError
})
