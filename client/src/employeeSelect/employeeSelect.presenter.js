import React from 'react'
import {string, func, arrayOf, oneOf, bool, node} from 'prop-types'
import classNames from 'classnames'

import QueryInput from './queryInput/queryInput.presenter'
import Suggestions from './suggestions/suggestions.presenter'
import {employeeShape} from '../app.shapes'
import './employeeSelect.css'

const EmployeeSelect = ({
  query,
  suggestions,
  selectedEmployee,
  width = 'normal',
  isDisabled,
  label,
  onQueryChange,
  onFetchNextPage,
  onSelectEmployee,
  uniqueID
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
    {(label && uniqueID) && (
      <label
        className={classNames(
          'selectLabel',
          {inputDisabled: isDisabled}
        )}
        htmlFor={uniqueID}
      >
        {label}
      </label>
    )}
    <QueryInput
      query={query}
      isCaretUpsideDown={suggestions !== null}
      selectedEmployee={selectedEmployee}
      onQueryChange={onQueryChange}
      onRemoveSelection={() => onSelectEmployee({employee: null})}
      isDisabled={isDisabled}
      label={label}
      uniqueID={uniqueID}
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
  suggestions: arrayOf(employeeShape),
  selectedEmployee: employeeShape,
  label: node,
  onQueryChange: func.isRequired,
  onFetchNextPage: func.isRequired,
  onSelectEmployee: func.isRequired,
  width: oneOf(['narrow', 'normal', 'wide', 'auto']),
  isDisabled: bool,
  uniqueID: string
}

export default EmployeeSelect
