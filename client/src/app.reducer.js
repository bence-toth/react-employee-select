import actions from './app.actions'

const initialState = {
  query: '',
  suggestions: null,
  nextPageURL: null,
  totalSuggestionsForQuery: null,
  highlightedSuggestionIndex: null,
  selectedEmployee: null,
  isQueryFetching: false,
  isNextPageFetching: false
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
        suggestions: [...(state.suggestions || []), ...action.suggestions],
        nextPageURL: action.nextPageURL,
        totalSuggestionsForQuery: action.totalSuggestionsForQuery
      }
    case actions.clearSuggestions:
      return {
        ...state,
        suggestions: null,
        nextPageURL: null,
        totalSuggestionsForQuery: null
      }
    case actions.selectEmployee:
      return {
        query: '',
        suggestions: null,
        nextPageURL: null,
        totalSuggestionsForQuery: null,
        highlightedSuggestionIndex: null,
        selectedEmployee: action.employee
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
    default:
      throw new Error(`Unknown action type '${action.type}'`)
  }
}

export {reducer, initialState}
