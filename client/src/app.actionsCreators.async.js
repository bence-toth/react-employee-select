import {addSuggestions} from './app.actionsCreators'

// eslint-disable-next-line import/prefer-default-export
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
