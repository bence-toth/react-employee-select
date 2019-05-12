import React, {useCallback, useEffect, useReducer, useRef, useState} from 'react'

import {initialState, reducer} from './app.reducer'
import {
  clearSuggestions,
  selectEmployee,
  setFetchError,
  setNextPageFetching,
  setQueryFetching,
  updateQuery
} from './app.actionCreators'
import {receiveEmployeeData} from './app.actionCreators.async'
import fetchEmployees from './app.consumer'
import MainPresenter from './app.presenter'
import {debounce} from './app.utility'
import locale from './app.locale'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchCounter = useRef(0)

  // This would probably come from some context provider
  const [userLocale] = useState('en-US')
  const copy = locale[userLocale]

  const receiveEmployees = ({payload, fetchID, ok}) => {
    if (fetchID === fetchCounter.current) {
      if (ok) {
        payload.then(receiveEmployeeData(dispatch))
      }
      else {
        dispatch(setFetchError({hasError: true}))
      }
    }
  }

  const getNewFetchID = () => { // Track the last fetch
    const newFetchID = fetchCounter.current + 1
    fetchCounter.current = newFetchID
    return newFetchID
  }

  const fetchEmployeeDataCallback = useCallback(
    () => {
      debounce(() => {
        dispatch(setQueryFetching({isFetching: true}))
        dispatch(clearSuggestions())
        fetchEmployees({
          fetchID: getNewFetchID(),
          pageLength: 6,
          pageNumber: 1,
          query: state.query
        })
          .then(receiveEmployees)
      }, 350)()
    },
    [state.query],
  )

  useEffect(() => { // Fetch data as the user types
    fetchEmployeeDataCallback()
  }, [state.query, fetchEmployeeDataCallback])

  useEffect(() => { // Fetch when removing selection
    if (state.selectedEmployee === null) {
      fetchEmployeeDataCallback()
    }
  }, [state.selectedEmployee, fetchEmployeeDataCallback])

  const fetchNextPage = () => { // Fetch next page when scrolled to bottom
    const newFetchID = getNewFetchID()
    dispatch(setNextPageFetching({isFetching: true}))
    fetchEmployees({
      fetchID: newFetchID,
      URL: state.nextPageURL
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
      copy={copy}
      hasFetchError={state.hasFetchError}
      isNextPageFetching={state.isNextPageFetching}
      isQueryFetching={state.isQueryFetching}
      onFetchNextPage={fetchNextPageIfNeeded}
      onQueryChange={({target: {value}}) => dispatch(updateQuery({query: value}))}
      onSelectEmployee={employee => dispatch(selectEmployee(employee))}
      query={state.query}
      selectedEmployee={state.selectedEmployee}
      suggestions={state.suggestions}
    />
  )
}

export default App
