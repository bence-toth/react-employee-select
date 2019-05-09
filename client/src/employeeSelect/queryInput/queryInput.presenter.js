import React from 'react'
import {string, func, bool} from 'prop-types'

import Selection from './selection/selection.presenter'
import Input from './input/input.presenter'
import {employeeShape, copyShape} from '../../app.shapes'
import './queryInput.css'

const QueryInput = ({
  query,
  isCaretUpsideDown,
  selectedEmployee,
  isDisabled,
  uniqueID,
  copy,
  onQueryChange,
  onRemoveSelection,
  isQueryFetching
}) => (
  <div className='queryInputWrapper'>
    {selectedEmployee
      ? (
        <Selection
          selectedEmployee={selectedEmployee}
          isDisabled={isDisabled}
          onRemoveSelection={onRemoveSelection}
        />
      )
      : (
        <Input
          query={query}
          isCaretUpsideDown={isCaretUpsideDown}
          isDisabled={isDisabled}
          uniqueID={uniqueID}
          onQueryChange={onQueryChange}
          isQueryFetching={isQueryFetching}
          copy={copy}
        />
      )
    }
  </div>
)

QueryInput.propTypes = {
  query: string.isRequired,
  isCaretUpsideDown: bool,
  selectedEmployee: employeeShape,
  isDisabled: bool,
  isQueryFetching: bool,
  copy: copyShape,
  uniqueID: string,
  onQueryChange: func.isRequired,
  onRemoveSelection: func.isRequired
}

export default QueryInput
