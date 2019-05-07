import {addSuggestions} from './app.actionsCreators'

export const receiveEmployeeData = dispatch => (
  ({
    data: suggestions,
    links: {next: nextPageURL},
    meta: {page: {total: totalSuggestionsForQuery}}
  }) => {
    dispatch(addSuggestions({
      suggestions,
      nextPageURL,
      totalSuggestionsForQuery
    }))
  }
)
