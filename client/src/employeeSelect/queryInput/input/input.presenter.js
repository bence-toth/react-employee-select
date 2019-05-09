import React from 'react'
import {string, func, bool} from 'prop-types'
import classNames from 'classnames'

import Spinner from '../../../spinner/spinner.presenter'
import {onKeyDown} from './input.eventHandlers'
import {copyShape} from '../../../app.shapes'
import './input.css'
import caret from './caret-down.svg'

const Input = ({
  query,
  isCaretUpsideDown,
  isDisabled,
  uniqueID,
  onQueryChange,
  isQueryFetching,
  copy
}) => (
  <>
    <input
      id={uniqueID}
      data-role='queryInput'
      className='queryInput'
      type='text'
      value={query}
      placeholder={copy.managerSelectPlaceholder}
      onChange={onQueryChange}
      onKeyDown={onKeyDown}
      disabled={isDisabled}
      autoComplete='off'
    />
    <input
      className='ghost queryInput'
      type='text'
      value=''
      placeholder={copy.managerSelectPlaceholder}
      readOnly
    />
    {isQueryFetching
      ? (
        <div className='spinnerWrapper'>
          <Spinner />
        </div>
      )
      : (
        <img
          className={classNames(
            'caret',
            {upsideDown: isCaretUpsideDown}
          )}
          src={caret}
          alt=''
        />
      )
    }
  </>
)

Input.propTypes = {
  query: string.isRequired,
  isCaretUpsideDown: bool,
  isDisabled: bool,
  isQueryFetching: bool,
  uniqueID: string,
  copy: copyShape,
  onQueryChange: func.isRequired
}

export default Input
