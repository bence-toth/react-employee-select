import actions from './app.actions'
import {
  addSuggestions,
  clearSuggestions,
  selectEmployee,
  setFetchError,
  setNextPageFetching,
  setQueryFetching,
  updateQuery
} from './app.actionHandlers'

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

const actionHandlers = {
  [actions.addSuggestions]: addSuggestions,
  [actions.clearSuggestions]: clearSuggestions,
  [actions.selectEmployee]: selectEmployee,
  [actions.setFetchError]: setFetchError,
  [actions.setNextPageFetching]: setNextPageFetching,
  [actions.setQueryFetching]: setQueryFetching,
  [actions.updateQuery]: updateQuery
}

const reducer = (state, action) => ({
  ...state,
  ...(
    actionHandlers[action.type]
      ? (actionHandlers[action.type])({state, action})
      : {}
  )
})

export {reducer, initialState}
