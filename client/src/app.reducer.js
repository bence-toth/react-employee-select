import actions from './app.actions'

const initialState = {
  query: '',
  suggestions: [],
  nextPageURL: null,
  totalSuggestionsForQuery: null,
  selectedEmployee: null,
  highlightedSuggestionIndex: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.updateQuery:
      return {
        ...state,
        query: action.query
      }
    case actions.addSuggestions:
      return {
        ...state,
        suggestions: [...state.suggestions, ...action.suggestions],
        nextPageURL: action.nextPageURL,
        totalSuggestionsForQuery: action.totalSuggestionsForQuery
      }
    case actions.clearSuggestions:
      return {
        ...state,
        suggestions: [],
        nextPageURL: null,
        totalSuggestionsForQuery: null
      }
    // case actions.selectEmployee:
    // case actions.clearSelection:
    // case actions.highlightSuggestion:
    // case actions.highlightNextSuggestion:
    // case actions.highlightPreviousSuggestion:
    default:
      throw new Error(`Unknown action type '${action.type}'`)
  }
}

export {reducer, initialState}
