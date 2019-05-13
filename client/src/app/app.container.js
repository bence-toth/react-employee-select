import React, {useCallback, useEffect, useReducer, useRef, useState} from 'react'

import {initialState, reducer} from './app.reducer'
import {selectEmployee, updateQuery} from './app.actionCreators'
import {requestEmployeeData, fetchNextPage} from './app.actionCreators.async'
import MainPresenter from './app.presenter'
import locale from './app.locale'

// eslint-disable-next-line fp/no-let
let timeout

const debounce = (functionToDebounce, delay) => (
  (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      functionToDebounce(...args)
    }, delay)
  }
)

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchCounter = useRef(0)
  const getNewFetchID = () => { // Track the last fetch
    const newFetchID = fetchCounter.current + 1
    fetchCounter.current = newFetchID
    return newFetchID
  }

  // This would probably come from some context provider
  const [userLocale] = useState('en-US')
  const copy = locale[userLocale]

  const fetchEmployeeDataCallback = useCallback(
    () => {
      debounce(
        () => {
          requestEmployeeData(dispatch)({
            fetchCounter,
            getNewFetchID,
            query: state.query
          })
        },
        350
      )()
    },
    [state.query]
  )

  useEffect(() => { // Fetch data as the user types
    fetchEmployeeDataCallback()
  }, [state.query, fetchEmployeeDataCallback])

  useEffect(() => { // Fetch when removing selection
    if (state.selectedEmployee === null) {
      fetchEmployeeDataCallback()
    }
  }, [state.selectedEmployee, fetchEmployeeDataCallback])

  const fetchNextPageIfNeeded = () => {
    const {suggestions, totalSuggestionsForQuery, nextPageURL} = state
    const canFetchMore = suggestions.length < totalSuggestionsForQuery
    if (canFetchMore) {
      fetchNextPage(dispatch)({
        fetchCounter,
        getNewFetchID,
        nextPageURL
      })
    }
  }

  return (
    <MainPresenter
      copy={copy}
      hasFetchError={state.hasFetchError}
      isNextPageFetching={state.isNextPageFetching}
      isQueryFetching={state.isQueryFetching}
      onFetchNextPage={fetchNextPageIfNeeded}
      onQueryChange={
        ({target: {value}}) => dispatch(updateQuery({query: value}))
      }
      onSelectEmployee={
        employee => dispatch(selectEmployee(employee))
      }
      query={state.query}
      selectedEmployee={state.selectedEmployee}
      suggestions={state.suggestions}
    />
  )
}

export default App
