import React, {useCallback, useEffect, useReducer, useRef, useState} from 'react'

import {initialState, reducer} from './app.reducer'
import {
  clearSuggestions,
  selectEmployee,
  setFetchError,
  setNextPageFetching,
  setQueryFetching,
  updateQuery
} from './app.actionsCreators'
import {receiveEmployeeData} from './app.actionsCreators.async'
import fetchEmployees from './app.consumer'
import MainPresenter from './app.presenter'
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
        payload.then(data => {
          receiveEmployeeData(dispatch)(data)
          dispatch(setFetchError({hasError: false}))
          dispatch(setNextPageFetching({isFetching: false}))
          dispatch(setQueryFetching({isFetching: false}))
        })
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
      fetchEmployeeData()
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
      hasFetchError={state.hasFetchError}
      copy={copy}
      onFetchNextPage={fetchNextPageIfNeeded}
      onQueryChange={({target: {value}}) => dispatch(updateQuery({query: value}))}
      onSelectEmployee={employee => dispatch(selectEmployee(employee))}
    />
  )
}

export default App
