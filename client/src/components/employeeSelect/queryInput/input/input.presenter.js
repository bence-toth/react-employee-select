import React from 'react'
import {string, func, bool} from 'prop-types'
import classNames from 'classnames'

import Spinner from '../../../spinner/spinner.presenter'
import {onKeyDown} from './input.eventHandlers'
import {copyShape} from '../../../../app.shapes'
import './input.css'
import caret from './caret-down.svg'

const Input = ({
  copy,
  isCaretUpsideDown,
  isDisabled,
  isQueryFetching,
  onQueryChange,
  query,
  uniqueID
}) => (
  <>
    <input
      autoComplete='off'
      className='queryInput'
      data-role='queryInput'
      disabled={isDisabled}
      id={uniqueID}
      onChange={onQueryChange}
      onKeyDown={onKeyDown}
      placeholder={copy.employeeSelectPlaceholder}
      tabIndex={0}
      type='text'
      value={query}
    />
    <input
      className='ghost queryInput'
      placeholder={copy.employeeSelectPlaceholder}
      readOnly
      type='text'
      value=''
    />
    {isQueryFetching
      ? (
        <div className='spinnerWrapper'>
          <Spinner
            size='tiny'
            thickness='thin'
          />
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
  copy: copyShape,
  isCaretUpsideDown: bool,
  isDisabled: bool,
  isQueryFetching: bool,
  onQueryChange: func.isRequired,
  query: string.isRequired,
  uniqueID: string
}

export default Input
