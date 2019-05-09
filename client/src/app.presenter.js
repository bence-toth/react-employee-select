import React from 'react'
import {string, func, arrayOf, bool} from 'prop-types'

import EmployeeSelect from './employeeSelect/employeeSelect.presenter'
import {employeeShape, copyShape} from './app.shapes'
import './app.css'

const MainPresenter = ({
  query,
  suggestions,
  selectedEmployee,
  isQueryFetching,
  isNextPageFetching,
  copy,
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
        uniqueID='mySpecialEmplyeeSelect'
        copy={copy}
        isQueryFetching={isQueryFetching}
        isNextPageFetching={isNextPageFetching}
        onQueryChange={onQueryChange}
        onFetchNextPage={onFetchNextPage}
        onSelectEmployee={onSelectEmployee}
      />
    </div>
  </main>
)

MainPresenter.propTypes = {
  query: string.isRequired,
  suggestions: arrayOf(employeeShape),
  selectedEmployee: employeeShape,
  isQueryFetching: bool,
  isNextPageFetching: bool,
  copy: copyShape,
  onFetchNextPage: func.isRequired,
  onQueryChange: func.isRequired,
  onSelectEmployee: func.isRequired
}

export default MainPresenter
