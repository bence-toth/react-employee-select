import React from 'react'
import {string, func, arrayOf, bool} from 'prop-types'

import EmployeeSelect from './employeeSelect/employeeSelect.presenter'
import {employeeShape, copyShape} from './app.shapes'
import './app.css'

const MainPresenter = ({
  copy,
  hasFetchError,
  isNextPageFetching,
  isQueryFetching,
  onFetchNextPage,
  onQueryChange,
  onSelectEmployee,
  query,
  selectedEmployee,
  suggestions
}) => (
  <main>
    <div>
      <EmployeeSelect
        copy={copy}
        hasFetchError={hasFetchError}
        isNextPageFetching={isNextPageFetching}
        isQueryFetching={isQueryFetching}
        onFetchNextPage={onFetchNextPage}
        onQueryChange={onQueryChange}
        onSelectEmployee={onSelectEmployee}
        query={query}
        selectedEmployee={selectedEmployee}
        suggestions={suggestions}
        uniqueID='mySpecialEmplyeeSelect'
        width='normal'
      />
    </div>
  </main>
)

MainPresenter.propTypes = {
  copy: copyShape,
  hasFetchError: bool,
  isNextPageFetching: bool,
  isQueryFetching: bool,
  onFetchNextPage: func.isRequired,
  onQueryChange: func.isRequired,
  onSelectEmployee: func.isRequired,
  query: string.isRequired,
  selectedEmployee: employeeShape,
  suggestions: arrayOf(employeeShape)
}

export default MainPresenter
