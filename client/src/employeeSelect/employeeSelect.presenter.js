import React from 'react'
import {string, func, arrayOf, shape} from 'prop-types'
import classNames from 'classnames'

import {generateMonogram, generateBackgroundColor} from './employeeSelect.utility'
import {onMouseMove, onKeyDown} from './employeeSelect.eventHandlers'
import './employeeSelect.css'
import caret from './caret-down.svg'

const EmployeeSelect = ({
  query,
  suggestions,
  onQueryChange
}) => (
  <div
    className='employeeSelect'
    data-role='employeeSelect'
  >
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
          {upsideDown: suggestions !== null}
        )}
        alt=''
      />
    </div>
    {suggestions && (
      <div data-role='suggestions' className='suggestionsWrapper' tabIndex={-1}>
        <ul>
          {suggestions.map(({attributes: {id, name, email, avatar}}) => (
            <li data-role='suggestion' key={id}>
              <button
                className='suggestion'
                type='button'
                onMouseMove={onMouseMove}
                onKeyDown={onKeyDown}
              >
                <div className='avatarWrapper'>
                  <div className='avatar'>
                    {avatar && (
                      <img src={avatar} alt={name} />
                    )}
                    <div
                      className='monogram'
                      style={{backgroundColor: generateBackgroundColor({name})}}
                    >
                      {generateMonogram({name})}
                    </div>
                  </div>
                </div>
                <div className='nameWrapper'>
                  <div className='name'>{name}</div>
                  <address className='email'>{email}</address>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
)

EmployeeSelect.propTypes = {
  query: string.isRequired,
  suggestions: arrayOf(shape), // TODO:
  onQueryChange: func.isRequired
}

export default EmployeeSelect
