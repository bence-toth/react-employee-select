import React from 'react'
import {string, func, arrayOf, shape} from 'prop-types'

import EmployeeSelect from './employeeSelect/employeeSelect.presenter'
import './app.css'

const App = ({
  query,
  suggestions,
  selectedEmployee,
  onQueryChange,
  onFetchNextPage,
  onSelectEmployee
}) => (
  <main>
    <div>
      <EmployeeSelect
        query={query}
        selectedEmployee={selectedEmployee}
        suggestions={suggestions}
        width='normal'
        onQueryChange={onQueryChange}
        onFetchNextPage={onFetchNextPage}
        onSelectEmployee={onSelectEmployee}
        isDisabled
        uniqueID='mySpecialEmplyeeSelect'
        label='Nominate manager of the year'
      />
    </div>
  </main>
)

App.propTypes = {
  query: string.isRequired,
  suggestions: arrayOf(shape), // TODO:
  selectedEmployee: shape({}), // TODO:
  onFetchNextPage: func.isRequired,
  onQueryChange: func.isRequired,
  onSelectEmployee: func.isRequired
}

export default App
