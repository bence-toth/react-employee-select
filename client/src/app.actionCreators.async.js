import {addSuggestions} from './app.actionCreators'

const receiveEmployeeData = dispatch => (
  ({
    data: suggestions,
    links: {next: nextPageURL},
    meta: {page: {total: totalSuggestionsForQuery}}
  }) => {
    dispatch(addSuggestions({
      nextPageURL,
      suggestions,
      totalSuggestionsForQuery
    }))
  }
)

export {receiveEmployeeData}
