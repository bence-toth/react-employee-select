import React from 'react'
import {string, func, number, arrayOf, shape} from 'prop-types'

import EmployeeSelect from './employeeSelect/employeeSelect.presenter'
import './app.css'

const App = ({
  query,
  suggestions,
  onQueryChange
}) => (
  <main>
    <div>
      <EmployeeSelect
        query={query}
        suggestions={suggestions}
        onQueryChange={onQueryChange}
      />
      {/*
        Next URL: {nextPageURL}
        onClick={onFetchNext}
      */}
    </div>
  </main>
)

App.propTypes = {
  query: string.isRequired,
  suggestions: arrayOf(shape), // TODO:
  // totalSuggestionsForQuery: number,
  // onFetchNext: func.isRequired,
  onQueryChange: func.isRequired
}

export default App
