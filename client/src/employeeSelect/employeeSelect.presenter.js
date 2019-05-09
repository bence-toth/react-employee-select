import React from 'react'
import {string, func, arrayOf, oneOf, bool, node} from 'prop-types'
import classNames from 'classnames'

import QueryInput from './queryInput/queryInput.presenter'
import Suggestions from './suggestions/suggestions.presenter'
import {employeeShape, copyShape} from '../app.shapes'
import './employeeSelect.css'

const EmployeeSelect = ({
  copy,
  hasFetchError,
  isDisabled,
  isNextPageFetching,
  isQueryFetching,
  label,
  onFetchNextPage,
  onQueryChange,
  onSelectEmployee,
  query,
  selectedEmployee,
  suggestions,
  uniqueID,
  width = 'normal'
}) => (
  <div
    className={classNames(
      'employeeSelect',
      {
        narrow: width === 'narrow',
        normal: width === 'normal',
        wide: width === 'wide'
      }
    )}
    data-role='employeeSelect'
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
      copy={(({managerSelectPlaceholder}) => ({managerSelectPlaceholder}))(copy)}
      isCaretUpsideDown={suggestions !== null}
      isDisabled={isDisabled}
      isQueryFetching={isQueryFetching}
      label={label}
      onQueryChange={onQueryChange}
      onRemoveSelection={() => onSelectEmployee({employee: null})}
      query={query}
      selectedEmployee={selectedEmployee}
      uniqueID={uniqueID}
    />
    {!isDisabled && !selectedEmployee && suggestions && (
      <Suggestions
        copy={
          (({managerNoQueryResults, managerFetchError}) =>
            ({managerNoQueryResults, managerFetchError})
          )(copy)
        }
        hasFetchError={hasFetchError}
        isDisabled={isDisabled}
        isNextPageFetching={isNextPageFetching}
        onFetchNextPage={onFetchNextPage}
        onSelectEmployee={onSelectEmployee}
        suggestions={suggestions /* That’s a lot of suggestions... */}
      />
    ) }
  </div>
)

EmployeeSelect.propTypes = {
  copy: copyShape,
  hasFetchError: bool,
  isDisabled: bool,
  isNextPageFetching: bool,
  isQueryFetching: bool,
  label: node,
  onFetchNextPage: func.isRequired,
  onQueryChange: func.isRequired,
  onSelectEmployee: func.isRequired,
  query: string.isRequired,
  selectedEmployee: employeeShape,
  suggestions: arrayOf(employeeShape),
  uniqueID: string,
  width: oneOf(['narrow', 'normal', 'wide', 'auto'])
}

export default EmployeeSelect
