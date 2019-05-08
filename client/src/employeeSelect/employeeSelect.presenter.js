import React from 'react'
import {string, func, arrayOf, shape} from 'prop-types'

import QueryInput from './queryInput/queryInput.presenter'
import Suggestions from './suggestions/suggestions.presenter'
import './employeeSelect.css'

const EmployeeSelect = ({
  query,
  suggestions,
  selectedEmployee,
  onQueryChange,
  onFetchNextPage,
  onSelectEmployee
}) => (
  <div
    data-role='employeeSelect'
    className='employeeSelect'
  >
    <QueryInput
      query={query}
      onQueryChange={onQueryChange}
      isCaretUpsideDown={suggestions !== null}
      selectedEmployee={selectedEmployee}
    />
    {(query.length > 0) && !selectedEmployee && suggestions && (
      <Suggestions
        suggestions={suggestions /* That’s a lot of suggestions... */}
        onFetchNextPage={onFetchNextPage}
        onSelectEmployee={onSelectEmployee}
      />
    ) }
  </div>
)

EmployeeSelect.propTypes = {
  query: string.isRequired,
  suggestions: arrayOf(shape), // TODO:
  selectedEmployee: shape({}), // TODO:
  onQueryChange: func.isRequired,
  onFetchNextPage: func.isRequired,
  onSelectEmployee: func.isRequired
}

export default EmployeeSelect
