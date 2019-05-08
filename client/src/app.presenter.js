import React from 'react'
import {string, func, arrayOf, shape} from 'prop-types'

import EmployeeSelect from './employeeSelect/employeeSelect.presenter'
import './app.css'

const App = ({
  query,
  suggestions,
  onQueryChange,
  onFetchNextPage
}) => (
  <main>
    <div>
      <EmployeeSelect
        query={query}
        suggestions={suggestions}
        onQueryChange={onQueryChange}
        onFetchNextPage={onFetchNextPage}
      />
    </div>
  </main>
)

App.propTypes = {
  query: string.isRequired,
  suggestions: arrayOf(shape), // TODO:
  onFetchNextPage: func.isRequired,
  onQueryChange: func.isRequired
}

export default App
