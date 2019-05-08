import React from 'react'
import {arrayOf, shape} from 'prop-types'

import {generateMonogram, generateBackgroundColor} from './suggestions.utility'
import {onMouseMove, onKeyDown} from './suggestions.eventHandlers'
import './suggestions.css'

const Suggestions = ({suggestions}) => (
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
)

Suggestions.propTypes = {
  suggestions: arrayOf(shape) // TODO:
}

export default Suggestions
