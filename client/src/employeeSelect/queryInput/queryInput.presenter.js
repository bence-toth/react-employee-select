import React from 'react'
import {string, func, bool, shape} from 'prop-types'
import classNames from 'classnames'

import Avatar from '../../avatar/avatar.presenter'
import {onKeyDown} from './suggestion.eventHandlers'
import './queryInput.css'
import caret from './caret-down.svg'
import cross from './cross.svg'

const QueryInput = ({
  query,
  isCaretUpsideDown,
  selectedEmployee,
  isDisabled,
  uniqueID,
  onQueryChange,
  onRemoveSelection
}) => (
  <div className='queryInputWrapper'>
    {selectedEmployee && (
      <div className='selection'>
        <Avatar
          name={selectedEmployee.name}
          avatarURL={selectedEmployee.avatar}
        />
        <div className='nameWrapper'>
          <div className='name'>{selectedEmployee.name}</div>
          <address className='email'>{selectedEmployee.email}</address>
        </div>
        {!isDisabled && (
          <button
            className='removeSelection'
            type='button'
            onClick={onRemoveSelection}
            disabled={isDisabled}
          >
            <img
              className={classNames(
                'cross',
                {upsideDown: isCaretUpsideDown}
              )}
              src={cross}
              alt='Remove selection'
              title='Remove selection'
            />
          </button>
        )}
      </div>
    )}
    <input
      id={uniqueID}
      data-role='queryInput'
      className={classNames(
        'queryInput',
        {showsPlaceholder: query.length === 0}
      )}
      type='text'
      value={query}
      placeholder='Choose Manager'
      onChange={onQueryChange}
      onKeyDown={onKeyDown}
      disabled={isDisabled}
    />
    <img
      className={classNames(
        'caret',
        {upsideDown: isCaretUpsideDown}
      )}
      src={caret}
      alt=''
    />
  </div>
)

QueryInput.propTypes = {
  query: string.isRequired,
  isCaretUpsideDown: bool,
  selectedEmployee: shape({}), // TODO:
  isDisabled: bool,
  uniqueID: string,
  onQueryChange: func.isRequired,
  onRemoveSelection: func.isRequired
}

export default QueryInput
