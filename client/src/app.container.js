import React, {useReducer, useEffect, useRef} from 'react'

import {reducer, initialState} from './app.reducer'
import {
  clearSuggestions,
  updateQuery,
  selectEmployee,
  setQueryFetching,
  setNextPageFetching
} from './app.actionsCreators'
import {receiveEmployeeData} from './app.actionsCreators.async'
import fetchEmployees from './app.consumer'
import MainPresenter from './app.presenter'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchCounter = useRef(0)

  const receiveEmployees = ({payload, fetchID}) => {
    payload.then(data => {
      if (fetchID === fetchCounter.current) {
        receiveEmployeeData(dispatch)(data)
        dispatch(setQueryFetching({isFetching: false}))
        dispatch(setNextPageFetching({isFetching: false}))
      }
    })
  }

  const getNewFetchID = () => { // Track the last fetch
    const newFetchID = fetchCounter.current + 1
    fetchCounter.current = newFetchID
    return newFetchID
  }

  const fetchEmployeeData = () => {
    dispatch(clearSuggestions())
    const newFetchID = getNewFetchID()
    dispatch(setQueryFetching({isFetching: true}))
    fetchEmployees({
      pageLength: 6,
      pageNumber: 1,
      query: state.query,
      fetchID: newFetchID
    })
      .then(receiveEmployees)
  }

  useEffect(() => { // Fetch data as the user types
    fetchEmployeeData()
  }, [state.query])

  useEffect(() => { // Fetch when removing selection
    if (state.selectedEmployee === null) {
      fetchEmployeeData()
    }
  }, [state.selectedEmployee])

  const fetchNextPage = () => { // Fetch next page when scrolled to bottom
    const newFetchID = getNewFetchID()
    dispatch(setNextPageFetching({isFetching: true}))
    fetchEmployees({
      URL: state.nextPageURL,
      fetchID: newFetchID
    })
      .then(receiveEmployees)
  }

  const fetchNextPageIfNeeded = () => {
    const {suggestions, totalSuggestionsForQuery} = state
    const canFetchMore = suggestions.length < totalSuggestionsForQuery
    if (canFetchMore) {
      fetchNextPage()
    }
  }

  return (
    <MainPresenter
      query={state.query}
      suggestions={state.suggestions}
      selectedEmployee={state.selectedEmployee}
      isQueryFetching={state.isQueryFetching}
      isNextPageFetching={state.isNextPageFetching}
      onFetchNextPage={fetchNextPageIfNeeded}
      onQueryChange={({target: {value}}) => dispatch(updateQuery({query: value}))}
      onSelectEmployee={employee => dispatch(selectEmployee(employee))}
    />
  )
}

export default App
