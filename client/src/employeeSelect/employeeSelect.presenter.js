import React from 'react'
import {string, func, arrayOf, shape, oneOf, bool} from 'prop-types'
import classNames from 'classnames'

import QueryInput from './queryInput/queryInput.presenter'
import Suggestions from './suggestions/suggestions.presenter'
import './employeeSelect.css'

const EmployeeSelect = ({
  query,
  suggestions,
  selectedEmployee,
  width = 'normal',
  isDisabled,
  onQueryChange,
  onFetchNextPage,
  onSelectEmployee
}) => (
  <div
    data-role='employeeSelect'
    className={classNames(
      'employeeSelect',
      {
        narrow: width === 'narrow',
        normal: width === 'normal',
        wide: width === 'wide'
      }
    )}
  >
    <QueryInput
      query={query}
      isCaretUpsideDown={suggestions !== null}
      selectedEmployee={selectedEmployee}
      onQueryChange={onQueryChange}
      onRemoveSelection={() => onSelectEmployee({employee: null})}
      isDisabled={isDisabled}
    />
    {!isDisabled && (query.length > 0) && !selectedEmployee && suggestions && (
      <Suggestions
        suggestions={suggestions /* That’s a lot of suggestions... */}
        onFetchNextPage={onFetchNextPage}
        onSelectEmployee={onSelectEmployee}
        isDisabled={isDisabled}
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
  onSelectEmployee: func.isRequired,
  width: oneOf(['narrow', 'normal', 'wide', 'auto']),
  isDisabled: bool
}

export default EmployeeSelect
