import React from 'react'
import {string} from 'prop-types'

import {generateMonogram, generateBackgroundColor} from './suggestion.utility'
import {onMouseMove, onKeyDown} from './suggestion.eventHandlers'
import './suggestion.css'

const Suggestion = ({id, name, email, avatar}) => (
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
)

Suggestion.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  email: string.isRequired,
  avatar: string
}

export default Suggestion
