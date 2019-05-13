import React, {useEffect, useReducer} from 'react'

import {useCounter, useDebounce, useLocale} from './app.hooks'
import {initialState, reducer} from './app.reducer'
import {selectEmployee, updateQuery} from './app.actionCreators'
import {requestEmployeeData, fetchNextPage} from './app.actionCreators.async'
import MainPresenter from './app.presenter'
import localeData from './app.locale'

const App = () => {
  const copy = useLocale({userLocale: 'en-US', localeData})
  const [state, dispatch] = useReducer(reducer, initialState)
  const [fetchCounter, getNewFetchID] = useCounter()

  // TODO: Async action creator
  const fetchEmployeeData = () => {
    requestEmployeeData(dispatch)({
      fetchCounter,
      getNewFetchID,
      query: state.query
    })
  }

  const fetchEmployeeDataCallback = useDebounce({
    functionToDebounce: fetchEmployeeData,
    delay: 150
  }, [state.query])

  useEffect(() => { // Fetch when removing selection
    if ((state.selectedEmployee === null) && (state.query === null)) {
      fetchEmployeeDataCallback()
    }
  }, [state.selectedEmployee, state.query, fetchEmployeeDataCallback])

  // TODO: Async action creator
  const fetchNextPageIfNeeded = () => { // Fetch when scrolled to bottom in drop down
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
