import React, {useReducer, useEffect, useRef} from 'react'

import {reducer, initialState} from './app.reducer'
import {clearSuggestions, updateQuery, selectEmployee} from './app.actionsCreators'
import {receiveEmployeeData} from './app.actionsCreators.async'
import fetchEmployees from './app.consumer'
import Presenter from './app.presenter'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchCounter = useRef(0)

  const receiveEmployees = ({payload, fetchID}) => {
    payload.then(data => {
      if (fetchID === fetchCounter.current) {
        receiveEmployeeData(dispatch)(data)
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
