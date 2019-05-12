import React from 'react'
import {string, func, arrayOf, bool} from 'prop-types'
import {Router} from '@reach/router'

import EmployeeSelect from '../components/employeeSelect/employeeSelect.presenter'
import {employeeShape, copyShape} from '../index.shapes'
import './app.css'

const MainPresenter = ({
  copy,
  hasFetchError,
  isDisabled,
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
      <Router>
        <EmployeeSelect
          path='/'
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
          isDisabled={isDisabled}
          uniqueID='mySpecialEmployeeSelect'
          width='normal'
        />
        <EmployeeSelect
          path='/disabled'
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
          uniqueID='mySpecialEmployeeSelect'
          width='normal'
          isDisabled
        />
      </Router>
    </div>
  </main>
)

MainPresenter.propTypes = {
  copy: copyShape,
  hasFetchError: bool,
  isDisabled: bool,
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
