import React from 'react'
import {string, func, bool} from 'prop-types'
import classNames from 'classnames'

import {onKeyDown} from './suggestion.eventHandlers'
import './queryInput.css'
import caret from './caret-down.svg'

const QueryInput = ({
  query,
  isCaretUpsideDown,
  onQueryChange
}) => (
  <div className='queryInputWrapper'>
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
  isCaretUpsideDown: bool, // TODO:
  onQueryChange: func.isRequired
}

export default QueryInput
