import {addSuggestions, setFetchError, setNextPageFetching, setQueryFetching} from './app.actionCreators'

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
    dispatch(setQueryFetching({isFetching: false}))
    dispatch(setNextPageFetching({isFetching: false}))
    dispatch(setFetchError({hasError: false}))
  }
)

export {receiveEmployeeData}
