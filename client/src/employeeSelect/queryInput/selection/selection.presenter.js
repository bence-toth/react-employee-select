import React from 'react'
import {func, bool} from 'prop-types'

import Avatar from '../../../avatar/avatar.presenter'
import {employeeShape} from '../../../app.shapes'
import './selection.css'
import cross from './cross.svg'

const Selection = ({
  selectedEmployee,
  isDisabled,
  onRemoveSelection
}) => (
  <div className='selection'>
    <Avatar
      name={selectedEmployee.name}
      avatarURL={selectedEmployee.avatar}
    />
    <div className='nameWrapper'>
      <div className='name'>{selectedEmployee.name}</div>
      <address className='email'>{selectedEmployee.email}</address>
    </div>
    {!isDisabled && (
      <button
        className='removeSelection'
        type='button'
        onClick={onRemoveSelection}
        disabled={isDisabled}
      >
        <img
          className='cross'
          src={cross}
          alt='Remove selection'
          title='Remove selection'
        />
      </button>
    )}
  </div>
)

Selection.propTypes = {
  selectedEmployee: employeeShape,
  isDisabled: bool,
  onRemoveSelection: func.isRequired
}

export default Selection
