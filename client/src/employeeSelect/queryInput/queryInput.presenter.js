import React from 'react'
import {string, func, bool} from 'prop-types'
import classNames from 'classnames'

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
      type='text'
      value={query}
      onChange={onQueryChange}
      placeholder='Choose Manager'
      className={classNames(
        'queryInput',
        {showsPlaceholder: query.length === 0}
      )}
    />
    <img
      src={caret}
      className={classNames(
        'caret',
        {upsideDown: isCaretUpsideDown}
      )}
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
