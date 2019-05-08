import React from 'react'
import {string} from 'prop-types'

import Avatar from '../../../avatar/avatar.presenter' // ../../...
import {onMouseMove, onKeyDown} from './suggestion.eventHandlers'
import './suggestion.css'

const Suggestion = ({name, email, avatar}) => (
  <li data-role='suggestion'>
    <button
      className='suggestion'
      type='button'
      onMouseMove={onMouseMove}
      onKeyDown={onKeyDown}
    >
      <Avatar
        name={name}
        avatarURL={avatar}
      />
      <div className='nameWrapper'>
        <div className='name'>{name}</div>
        <address className='email'>{email}</address>
      </div>
    </button>
  </li>
)

Suggestion.propTypes = {
  name: string.isRequired,
  email: string.isRequired,
  avatar: string
}

export default Suggestion
