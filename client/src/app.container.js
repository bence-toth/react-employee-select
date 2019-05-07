import React, {useReducer, useEffect} from 'react'
import fetchEmployees from './app.consumer'
// import AppPresenter from './app.presenter'
import {clearSuggestions, updateQuery} from './app.actionsCreators'
import {reducer, initialState} from './app.reducer'
import {receiveEmployeeData} from './app.actionsCreators.async'

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
    <>
      <div>
        Query is:
        {state.query}

        Suggestions (
        {state.suggestions.length}
        /
        {state.totalSuggestionsForQuery}
        ):
        <ul>
          {state.suggestions.map(({attributes: {name}}) => name).map(name => (
            <li>{name}</li>
          ))}
        </ul>
        Next URL:
        {state.nextPageURL}
      </div>
      <input
        type='text'
        onChange={({target: {value}}) => dispatch(updateQuery({query: value}))}
      />
      <button
        type='button'
        onClick={() => fetchNextPage()}
      >
        Fetch next page
      </button>
      {/* <AppPresenter /> */}
    </>
  )
}

export default App
