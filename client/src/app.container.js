import React, {useReducer, useEffect} from 'react'

import {reducer, initialState} from './app.reducer'
import {clearSuggestions, updateQuery} from './app.actionsCreators'
import {receiveEmployeeData} from './app.actionsCreators.async'
import fetchEmployees from './app.consumer'
import Presenter from './app.presenter'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch(clearSuggestions())
    fetchEmployees({pageLength: 30, pageNumber: 1, query: state.query})
      .then(receiveEmployeeData(dispatch))
  }, [state.query])

  const fetchNextPage = () => {
    fetchEmployees({URL: state.nextPageURL})
      .then(receiveEmployeeData(dispatch))
  }

  return (
    <Presenter
      query={state.query}
      suggestions={state.suggestions}
      totalSuggestionsForQuery={state.totalSuggestionsForQuery}
      onQueryChange={({target: {value}}) => dispatch(updateQuery({query: value}))}
      onFetchNext={() => fetchNextPage()}
      nextPageURL={state.nextPageURL}
    />
  )
}

export default App
