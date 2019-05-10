import React from 'react'
import {string, bool, arrayOf, oneOf, node} from 'prop-types'

import {employeeShape, copyShape} from '../../../src/app.shapes'

const Readme = ({
  query,
  copy,
  selectedEmployee,
  suggestions,
  uniqueID,
  width,
  label,
  hasFetchError,
  isDisabled,
  isNextPageFetching,
  isQueryFetching
}) => (
  <article>
    <h1>EmployeeSelect</h1>
    <p>
      The
      <code>EmployeeSelect</code>
      lets the user select an employee from a list of employees.
    </p>

    <h2>Props</h2>

    <h3><code>copy</code></h3>

    <h3><code>hasFetchError</code></h3>
    <p>A boolean flag marking whether there was an error fetching data from the server.</p>
    <p>
      Its current value is
      <code>{hasFetchError.toString()}</code>
      .
    </p>
    <p>
      Its default value is
      <code>false</code>
      .
    </p>

    <h3><code>isDisabled</code></h3>
    <h3><code>isNextPageFetching</code></h3>
    <h3><code>isQueryFetching</code></h3>
    <h3><code>label</code></h3>
    <h3><code>onFetchNextPage</code></h3>
    <h3><code>onQueryChange</code></h3>
    <h3><code>onSelectEmployee</code></h3>
    <h3><code>query</code></h3>
    <h3><code>selectedEmployee</code></h3>
    <h3><code>suggestions</code></h3>
    <h3><code>uniqueID</code></h3>

    <h3><code>width</code></h3>
    <p>The width of the input field and the suggestions drop down.</p>
    <p>
      It is a string value and it can be either
      <code>auto</code>
      ,
      <code>narrow</code>
      ,
      <code>normal</code>
      , or
      <code>wide</code>
      .
    </p>
    <p>
      Its current value is
      <code>{width}</code>
      . You can change that using the knobs.
    </p>
    <p>
      Its default value is
      <code>normal</code>
      .
    </p>
  </article>
)

Readme.propTypes = {
  copy: copyShape,
  hasFetchError: bool,
  isDisabled: bool,
  isNextPageFetching: bool,
  isQueryFetching: bool,
  label: node,
  query: string.isRequired,
  selectedEmployee: employeeShape,
  suggestions: arrayOf(employeeShape),
  uniqueID: string,
  width: oneOf(['narrow', 'normal', 'wide', 'auto'])
}


export default Readme
