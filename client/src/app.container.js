import React, {useReducer, useEffect} from 'react'

import {reducer, initialState} from './app.reducer'
import {clearSuggestions, updateQuery, selectEmployee} from './app.actionsCreators'
import {receiveEmployeeData} from './app.actionsCreators.async'
import fetchEmployees from './app.consumer'
import Presenter from './app.presenter'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => { // Fetch data as the user types
    dispatch(clearSuggestions())
    fetchEmployees({pageLength: 6, pageNumber: 1, query: state.query})
      .then(receiveEmployeeData(dispatch))
  }, [state.query])

  const fetchNextPage = () => {
    fetchEmployees({URL: state.nextPageURL})
      .then(receiveEmployeeData(dispatch))
  }

  const fetchNextPageIfNeeded = () => {
    const {suggestions, totalSuggestionsForQuery} = state
    const canFetchMore = suggestions.length < totalSuggestionsForQuery
    if (canFetchMore) {
      fetchNextPage()
    }
  }

  return (
    <Presenter
      query={state.query}
      suggestions={state.suggestions}
      selectedEmployee={state.selectedEmployee}
      onFetchNextPage={fetchNextPageIfNeeded}
      onQueryChange={({target: {value}}) => dispatch(updateQuery({query: value}))}
      onSelectEmployee={employee => dispatch(selectEmployee(employee))}
    />
  )
}

export default App
