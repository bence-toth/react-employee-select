import React, {useEffect, useReducer} from 'react'

import {useCounter, useDebounce, useLocale} from './app.hooks'
import {createReducer, actionHandlers, initialState} from './app.reducer'
import {selectEmployee, updateQuery} from './app.actionCreators'
import {fetchEmployeeData, fetchNextPage} from './app.actionCreators.async'
import MainPresenter from './app.presenter'
import localeData from './app.locale'

const App = () => {
  // Application state
  const [state, dispatch] = useReducer(createReducer(actionHandlers), initialState)
  const {
    hasFetchError,
    isNextPageFetching,
    isQueryFetching,
    nextPageURL,
    query,
    selectedEmployee,
    suggestions,
    totalSuggestionsForQuery
  } = state

  // Handle data fetching
  const [currentFetchID, getNewFetchID] = useCounter()

  const fetchEmployees = useDebounce(() => { // Fetch as the user types
    fetchEmployeeData(dispatch)({
      currentFetchID,
      getNewFetchID,
      query
    })
  }, 150, [query])

  useEffect(() => { // Fetch when removing selection
    if ((selectedEmployee === null) && (query === null)) {
      fetchEmployees()
    }
  }, [selectedEmployee, query, fetchEmployees])

  // Load microcopy
  const copy = useLocale({userLocale: 'en-US', localeData})

  return (
    <MainPresenter
      copy={copy}
      hasFetchError={hasFetchError}
      isNextPageFetching={isNextPageFetching}
      isQueryFetching={isQueryFetching}
      onFetchNextPage={() => fetchNextPage(dispatch)({
        suggestions,
        totalSuggestionsForQuery,
        nextPageURL,
        currentFetchID,
        getNewFetchID
      })}
      onQueryChange={
        ({target: {value}}) => dispatch(updateQuery({query: value}))
      }
      onSelectEmployee={
        employee => dispatch(selectEmployee(employee))
      }
      query={query}
      selectedEmployee={selectedEmployee}
      suggestions={suggestions}
    />
  )
}

export default App
