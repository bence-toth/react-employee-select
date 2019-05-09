import React from 'react'
import {string, func, bool} from 'prop-types'

import Selection from './selection/selection.presenter'
import Input from './input/input.presenter'
import {employeeShape, copyShape} from '../../app.shapes'
import './queryInput.css'

const QueryInput = ({
  copy,
  isCaretUpsideDown,
  isDisabled,
  isQueryFetching,
  onQueryChange,
  onRemoveSelection,
  query,
  selectedEmployee,
  uniqueID
}) => (
  <div className='queryInputWrapper'>
    {selectedEmployee
      ? (
        <Selection
          isDisabled={isDisabled}
          onRemoveSelection={onRemoveSelection}
          selectedEmployee={selectedEmployee}
        />
      )
      : (
        <Input
          copy={copy}
          isCaretUpsideDown={isCaretUpsideDown}
          isDisabled={isDisabled}
          isQueryFetching={isQueryFetching}
          onQueryChange={onQueryChange}
          query={query}
          uniqueID={uniqueID}
        />
      )
    }
  </div>
)

QueryInput.propTypes = {
  copy: copyShape,
  isCaretUpsideDown: bool,
  isDisabled: bool,
  isQueryFetching: bool,
  onQueryChange: func.isRequired,
  onRemoveSelection: func.isRequired,
  query: string.isRequired,
  selectedEmployee: employeeShape,
  uniqueID: string
}

export default QueryInput
