import React from 'react'
import {string, func} from 'prop-types'

import Avatar from '../../../avatar/avatar.presenter' // ../../...
import {onMouseMove, onKeyDown} from './suggestion.eventHandlers'
import './suggestion.css'

const Suggestion = ({id, name, email, avatar, onSelectEmployee}) => (
  <li data-role='suggestion'>
    <button
      className='suggestion'
      type='button'
      onMouseMove={onMouseMove}
      onKeyDown={onKeyDown}
      onClick={() => onSelectEmployee({employee: {id, name, email, avatar}})}
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
  id: string.isRequired,
  name: string.isRequired,
  email: string.isRequired,
  avatar: string,
  onSelectEmployee: func.isRequired
}

export default Suggestion
