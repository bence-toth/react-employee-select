import React from 'react'
import {string, bool, arrayOf, oneOf, node} from 'prop-types'

import {employeeShape, copyShape} from '../../../src/app.shapes'

const Readme = ({
  copy,
  hasFetchError,
  isDisabled,
  isNextPageFetching,
  isQueryFetching,
  label,
  query,
  selectedEmployee,
  suggestions,
  uniqueID,
  width,
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
      Its default value is
      <code>false</code>
      .
    </p>
    <p>
      Its current value is
      <code>{hasFetchError.toString()}</code>
      .
    </p>

    <h3><code>isDisabled</code></h3>
    <p>A boolean flag marking whether there the select is disabled.</p>
    <p>
      Its default value is
      <code>false</code>
      .
    </p>
    <p>
      Its current value is
      <code>{isDisabled.toString()}</code>
      . You can change this using the knobs.
    </p>

    <h3><code>isNextPageFetching</code></h3>
    <p>A boolean flag marking whether the next page of employees is yet to arrive from the server.</p>
    <p>
      Its default value is
      <code>false</code>
      .
    </p>
    <p>
      Its current value is
      <code>{isNextPageFetching.toString()}</code>
      . In some stories you can change this using the knobs.
    </p>

    <h3><code>isQueryFetching</code></h3>
    <p>A boolean flag marking whether the next page of employees is yet to arrive from the server.</p>
    <p>
      Its default value is
      <code>false</code>
      .
    </p>
    <p>
      Its current value is
      <code>{isQueryFetching.toString()}</code>
      . In some stories you can change this using the knobs.
    </p>

    <h3><code>label</code></h3>
    <p>An optional string value that renders a label on top of the select field.</p>
    <p>
      Its current value is
      <code>{label || 'undefined'}</code>
      . You can change this using the knobs.
    </p>

    <h3><code>onFetchNextPage</code></h3>
    <p>Callback firing when a new page of employees is requested.</p>

    <h3><code>onQueryChange</code></h3>
    <p>Event handler firing when the content of the query input changes.</p>

    <h3><code>onSelectEmployee</code></h3>
    <p>Callback firing when an employee from the list is selected.</p>

    <h3><code>query</code></h3>
    <p>The content of the query input field.</p>
    <p>
      Its default value is
      <code></code>
      .
    </p>
    <p>
      Its current value is
      <code>{query}</code>
      . In some stories you can change this using the knobs.
    </p>

    <h3><code>selectedEmployee</code></h3>
    <p>An object describing the currently selected employee.</p>
    <p>
      Its value is
      <code>null</code>
      if no employee is selected.
    </p>
    <p>
      The object has an
      <code>attribute</code>
      object, that contains
      <code>avatar</code>
      ,
      <code>email</code>
      ,
      <code>id</code>
      , and
      <code>name</code>
    </p>
    <p>
      Its default value is
      <code>null</code>
      .
    </p>
    <p>
      The currently selected employee’s name is value is
      <code>{selectedEmployee ? selectedEmployee.name : 'undefined'}</code>
      .
    </p>

    <h3><code>suggestions</code></h3>
    <h3><code>uniqueID</code></h3>
    <p>A unique string identifier that is required when using a label, it is ignored otherwise.</p>
    <p>It is used to create a link between the label end the input field.</p>

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
      Its default value is
      <code>normal</code>
      .
    </p>
    <p>
      Its current value is
      <code>{width}</code>
      . You can change that using the knobs.
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
