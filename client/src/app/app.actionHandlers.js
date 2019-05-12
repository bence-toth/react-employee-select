export const addSuggestions = ({state, action}) => ({
  nextPageURL: action.nextPageURL,
  suggestions: [
    ...(state.suggestions || []),
    ...action.suggestions
  ],
  totalSuggestionsForQuery: action.totalSuggestionsForQuery
})

export const clearSuggestions = () => ({
  nextPageURL: null,
  suggestions: null,
  totalSuggestionsForQuery: null
})

export const selectEmployee = ({action}) => ({
  nextPageURL: null,
  query: '',
  selectedEmployee: action.employee,
  suggestions: null,
  totalSuggestionsForQuery: null
})

export const setFetchError = ({state, action}) => ({
  hasFetchError: action.hasError,
  isQueryFetching: false,
  suggestions: action.hasError
    ? []
    : state.suggestions
})

export const setNextPageFetching = ({action}) => ({
  isNextPageFetching: action.isFetching
})

export const setQueryFetching = ({action}) => ({
  isQueryFetching: action.isFetching
})

export const updateQuery = ({action}) => ({
  query: action.query
})
