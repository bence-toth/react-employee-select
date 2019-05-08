import React from 'react'
import {string, func, arrayOf} from 'prop-types'

import EmployeeSelect from './employeeSelect/employeeSelect.presenter'
import {employeeShape} from './app.shapes'
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
        uniqueID='mySpecialEmplyeeSelect'
      />
    </div>
  </main>
)

App.propTypes = {
  query: string.isRequired,
  suggestions: arrayOf(employeeShape),
  selectedEmployee: employeeShape,
  onFetchNextPage: func.isRequired,
  onQueryChange: func.isRequired,
  onSelectEmployee: func.isRequired
}

export default App
