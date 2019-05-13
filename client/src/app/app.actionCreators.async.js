import {addSuggestions, clearSuggestions, setFetchError, setNextPageFetching, setQueryFetching} from './app.actionCreators'
import {fetchEmployees} from './app.consumer'
import {getSuggestions} from './app.utility'

const receiveSuggestions = (dispatch => (
  ({
    data,
    included,
    links: {
      next: nextPageURL
    },
    meta: {
      page: {
        total: totalSuggestionsForQuery
      }
    }
  }) => {
    const suggestions = getSuggestions({data, included})
    dispatch(addSuggestions({
      nextPageURL,
      suggestions,
      totalSuggestionsForQuery
    }))
    dispatch(setQueryFetching({isFetching: false}))
    dispatch(setNextPageFetching({isFetching: false}))
    dispatch(setFetchError({hasError: false}))
  }
))

const receiveEmployees = dispatch => (
  ({
    currentFetchID,
    fetchID,
    ok,
    payload
  }) => {
    if (fetchID === currentFetchID) {
      if (ok) {
        payload.then(receiveSuggestions(dispatch))
      }
      else {
        dispatch(setFetchError({hasError: true}))
      }
    }
  }
)

const fetchEmployeeData = dispatch => (
  ({
    getNewFetchID,
    query
  }) => {
    dispatch(setQueryFetching({isFetching: true}))
    dispatch(clearSuggestions())
    const currentFetchID = getNewFetchID()
    fetchEmployees({
      fetchID: currentFetchID,
      pageLength: 6,
      pageNumber: 1,
      query
    })
      .then(({ok, payload, fetchID}) => {
        receiveEmployees(dispatch)({
          currentFetchID,
          fetchID,
          ok,
          payload
        })
      })
  }
)

const fetchNextPage = dispatch => (({
  getNewFetchID,
  nextPageURL,
  suggestions,
  totalSuggestionsForQuery
}) => {
  if (suggestions && (suggestions.length < totalSuggestionsForQuery)) {
    const currentFetchID = getNewFetchID()
    dispatch(setNextPageFetching({isFetching: true}))
    fetchEmployees({
      fetchID: currentFetchID,
      URL: nextPageURL
    })
      .then(({ok, payload, fetchID}) => {
        receiveEmployees(dispatch)({
          currentFetchID,
          fetchID,
          ok,
          payload
        })
      })
  }
})


export {fetchEmployeeData, fetchNextPage}
