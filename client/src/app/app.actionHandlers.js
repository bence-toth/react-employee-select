export const addSuggestions = ({
  state: {
    suggestions: currentSuggestions
  },
  action: {
    nextPageURL,
    suggestions: newSuggestions,
    totalSuggestionsForQuery
  }
}) => ({
  nextPageURL,
  suggestions: [
    ...(currentSuggestions || []),
    ...newSuggestions
  ],
  totalSuggestionsForQuery
})

export const clearSuggestions = () => ({
  nextPageURL: null,
  suggestions: null,
  totalSuggestionsForQuery: null
})

export const selectEmployee = ({
  action: {
    employee: selectedEmployee
  }
}) => ({
  nextPageURL: null,
  query: '',
  selectedEmployee,
  suggestions: null,
  totalSuggestionsForQuery: null
})

export const setFetchError = ({
  state: {
    suggestions: currentSuggestions
  },
  action: {
    hasError: hasFetchError
  }
}) => ({
  hasFetchError,
  isQueryFetching: false,
  suggestions: hasFetchError
    ? []
    : currentSuggestions
})

export const setNextPageFetching = ({
  action: {
    isFetching: isNextPageFetching
  }
}) => ({
  isNextPageFetching
})

export const setQueryFetching = ({
  action: {
    isFetching: isQueryFetching
  }
}) => ({
  isQueryFetching
})

export const updateQuery = ({action: {query}}) => ({
  query
})
