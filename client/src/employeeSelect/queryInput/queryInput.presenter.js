import React from 'react'
import {string, func, bool, shape} from 'prop-types'
import classNames from 'classnames'

import Avatar from '../../avatar/avatar.presenter'
import {onKeyDown} from './suggestion.eventHandlers'
import './queryInput.css'
import caret from './caret-down.svg'

const QueryInput = ({
  query,
  isCaretUpsideDown,
  selectedEmployee,
  onQueryChange
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
      </div>
    )}
    {JSON.stringify(selectedEmployee)}
    <input
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
  onQueryChange: func.isRequired
}

export default QueryInput
