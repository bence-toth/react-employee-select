import React from 'react'
import {string, func, bool} from 'prop-types'
import classNames from 'classnames'

import {onKeyDown} from './input.eventHandlers'
import './input.css'
import caret from './caret-down.svg'

const Input = ({
  query,
  isCaretUpsideDown,
  isDisabled,
  uniqueID,
  onQueryChange
}) => (
  <>
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
      autoComplete='off'
    />
    <img
      className={classNames(
        'caret',
        {upsideDown: isCaretUpsideDown}
      )}
      src={caret}
      alt=''
    />
  </>
)

Input.propTypes = {
  query: string.isRequired,
  isCaretUpsideDown: bool,
  isDisabled: bool,
  uniqueID: string,
  onQueryChange: func.isRequired
}

export default Input
