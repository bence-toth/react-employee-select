import React from 'react'
import {func, bool} from 'prop-types'

import Avatar from '../../../avatar/avatar.presenter'
import {employeeShape} from '../../../../index.shapes'
import './selection.css'
import cross from './cross.svg'

const Selection = ({
  isDisabled,
  onRemoveSelection,
  selectedEmployee: {avatar, email, name}
}) => (
  <div
    className='selection'
    data-role='selection'
    tabIndex={0}
    role='button'
  >
    <Avatar
      avatarURL={avatar}
      name={name}
    />
    <div className='nameWrapper'>
      <div className='name'>{name}</div>
      <address className='email'>{email}</address>
    </div>
    {!isDisabled && (
      <button
        className='removeSelection'
        data-role='removeSelection'
        onClick={onRemoveSelection}
        type='button'
      >
        <img
          alt='Remove selection'
          className='cross'
          src={cross}
          title='Remove selection'
        />
      </button>
    )}
  </div>
)

Selection.propTypes = {
  isDisabled: bool,
  onRemoveSelection: func.isRequired,
  selectedEmployee: employeeShape
}

export default Selection
