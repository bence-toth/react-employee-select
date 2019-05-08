import React from 'react'
import {string, func, arrayOf, shape} from 'prop-types'

import QueryInput from './queryInput/queryInput.presenter'
import Suggestions from './suggestions/suggestions.presenter'
import './employeeSelect.css'

const EmployeeSelect = ({
  query,
  suggestions,
  onQueryChange
}) => (
  <div
    data-role='employeeSelect'
    className='employeeSelect'
  >
    <QueryInput
      query={query}
      onQueryChange={onQueryChange}
      isCaretUpsideDown={suggestions !== null}
    />
    {suggestions && (
      <Suggestions suggestions={suggestions} />
    ) /* That’s a lot of suggestions... */}
  </div>
)

EmployeeSelect.propTypes = {
  query: string.isRequired,
  suggestions: arrayOf(shape), // TODO:
  onQueryChange: func.isRequired
}

export default EmployeeSelect
