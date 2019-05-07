import React from 'react'
import {string, func, number, arrayOf, shape} from 'prop-types'
import './app.css'

const App = ({
  query = '',
  suggestions = [],
  totalSuggestionsForQuery,
  onQueryChange,
  onFetchNext = (() => {}),
  nextPageURL = (() => {})
}) => (
  <main>
    <div>
      <div>
        Query is:
        {query}

        Suggestions (
        {suggestions.length}
        /
        {totalSuggestionsForQuery}
        ):
        <ul>
          {suggestions.map(({attributes: {name}}) => name).map(name => (
            <li>{name}</li>
          ))}
        </ul>
        Next URL:
        {nextPageURL}
      </div>
      <input
        type='text'
        onChange={onQueryChange}
      />
      <button
        type='button'
        onClick={onFetchNext}
      >
        Fetch next page
      </button>
    </div>
  </main>
)

App.propTypes = {
  query: string.isRequired,
  nextPageURL: string,
  suggestions: arrayOf(shape), // TODO:
  totalSuggestionsForQuery: number,
  onQueryChange: func.isRequired,
  onFetchNext: func.isRequired
}

export default App
