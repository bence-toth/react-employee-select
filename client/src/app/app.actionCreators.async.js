import {addSuggestions, clearSuggestions, setFetchError, setNextPageFetching, setQueryFetching} from './app.actionCreators'
import {fetchEmployees} from './app.consumer'

const receiveEmployeeData = dispatch => (
  ({
    data: suggestions,
    links: {
      next: nextPageURL
    },
    meta: {
      page: {
        total: totalSuggestionsForQuery
      }
    }
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

const receiveEmployees = dispatch => (
  ({
    payload,
    fetchID,
    ok,
    fetchCounter
  }) => {
    if (fetchID === fetchCounter.current) {
      if (ok) {
        payload.then(receiveEmployeeData(dispatch))
      }
      else {
        dispatch(setFetchError({hasError: true}))
      }
    }
  }
)

const requestEmployeeData = dispatch => (
  ({
    fetchCounter,
    getNewFetchID,
    query
  }) => {
    const fetchID = getNewFetchID()
    dispatch(setQueryFetching({isFetching: true}))
    dispatch(clearSuggestions())
    fetchEmployees({
      fetchID,
      pageLength: 6,
      pageNumber: 1,
      query
    })
      .then(({ok, payload}) => {
        receiveEmployees(dispatch)({
          fetchCounter,
          fetchID,
          ok,
          payload
        })
      })
  }
)

const fetchNextPage = dispatch => (({
  getNewFetchID,
  nextPageURL
}) => { // Fetch next page when scrolled to bottom
  const newFetchID = getNewFetchID()
  dispatch(setNextPageFetching({isFetching: true}))
  fetchEmployees({
    fetchID: newFetchID,
    URL: nextPageURL
  })
    .then(receiveEmployees(dispatch))
})

export {requestEmployeeData, fetchNextPage}
