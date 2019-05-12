import React from 'react'
import {string, func} from 'prop-types'

import Avatar from '../../../avatar/avatar.presenter'
import {onMouseMove, onKeyDown} from './suggestion.eventHandlers'
import './suggestion.css'

const Suggestion = ({
  avatar,
  email,
  id,
  name,
  onSelectEmployee
}) => (
  <li data-role='suggestion'>
    <button
      className='suggestion'
      onClick={() => onSelectEmployee({
        employee: {id, name, email, avatar}
      })}
      onKeyDown={onKeyDown}
      onMouseMove={onMouseMove}
      tabIndex={0}
      type='button'
    >
      <Avatar
        avatarURL={avatar}
        name={name}
      />
      <div className='nameWrapper'>
        <div className='name'>{name}</div>
        <address className='email'>{email}</address>
      </div>
    </button>
  </li>
)

Suggestion.propTypes = {
  avatar: string,
  email: string.isRequired,
  id: string.isRequired,
  name: string.isRequired,
  onSelectEmployee: func.isRequired
}

export default Suggestion
