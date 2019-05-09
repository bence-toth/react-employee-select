import React from 'react'
import {string, func, arrayOf, oneOf, bool, node} from 'prop-types'
import classNames from 'classnames'

import QueryInput from './queryInput/queryInput.presenter'
import Suggestions from './suggestions/suggestions.presenter'
import {employeeShape, copyShape} from '../app.shapes'
import './employeeSelect.css'

const EmployeeSelect = ({
  query,
  suggestions,
  selectedEmployee,
  width = 'normal',
  isDisabled,
  label,
  copy,
  onQueryChange,
  onFetchNextPage,
  onSelectEmployee,
  uniqueID,
  isQueryFetching,
  isNextPageFetching,
  hasFetchError
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
      isQueryFetching={isQueryFetching}
      copy={(({managerSelectPlaceholder}) => ({managerSelectPlaceholder}))(copy)}
    />
    {!isDisabled && !selectedEmployee && suggestions && (
      <Suggestions
        suggestions={suggestions /* That’s a lot of suggestions... */}
        onFetchNextPage={onFetchNextPage}
        onSelectEmployee={onSelectEmployee}
        isDisabled={isDisabled}
        isNextPageFetching={isNextPageFetching}
        copy={
          (({managerNoQueryResults, managerFetchError}) =>
            ({managerNoQueryResults, managerFetchError})
          )(copy)
        }
        hasFetchError={hasFetchError}
      />
    ) }
  </div>
)

EmployeeSelect.propTypes = {
  query: string.isRequired,
  suggestions: arrayOf(employeeShape),
  selectedEmployee: employeeShape,
  label: node,
  isQueryFetching: bool,
  isNextPageFetching: bool,
  onQueryChange: func.isRequired,
  onFetchNextPage: func.isRequired,
  onSelectEmployee: func.isRequired,
  width: oneOf(['narrow', 'normal', 'wide', 'auto']),
  isDisabled: bool,
  copy: copyShape,
  uniqueID: string,
  hasFetchError: bool
}

export default EmployeeSelect
