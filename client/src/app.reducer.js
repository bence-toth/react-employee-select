import actions from './app.actions'

const initialState = {
  hasFetchError: false,
  highlightedSuggestionIndex: null,
  isNextPageFetching: false,
  isQueryFetching: false,
  nextPageURL: null,
  query: '',
  selectedEmployee: null,
  suggestions: null,
  totalSuggestionsForQuery: null
}

const reducer = (state, action) => { // TODO: Switch...
  switch (action.type) {
    case actions.updateQuery:
      return {
        ...state,
        query: action.query
      }
    case actions.addSuggestions:
      return {
        ...state,
        nextPageURL: action.nextPageURL,
        suggestions: [...(state.suggestions || []), ...action.suggestions],
        totalSuggestionsForQuery: action.totalSuggestionsForQuery
      }
    case actions.clearSuggestions:
      return {
        ...state,
        nextPageURL: null,
        suggestions: null,
        totalSuggestionsForQuery: null
      }
    case actions.selectEmployee:
      return {
        ...state,
        nextPageURL: null,
        query: '',
        selectedEmployee: action.employee,
        suggestions: null,
        totalSuggestionsForQuery: null
      }
    case actions.setQueryFetching:
      return {
        ...state,
        isQueryFetching: action.isFetching
      }
    case actions.setNextPageFetching:
      return {
        ...state,
        isNextPageFetching: action.isFetching
      }
    case actions.setFetchError:
      return {
        ...state,
        hasFetchError: action.hasError,
        isQueryFetching: false,
        suggestions: action.hasError ? [] : state.suggestions
      }
    default:
      throw new Error(`Unknown action type '${action.type}'`)
  }
}

export {reducer, initialState}
