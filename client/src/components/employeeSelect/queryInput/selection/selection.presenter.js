import React from 'react'
import {func, bool} from 'prop-types'

import Avatar from '../../../avatar/avatar.presenter'
import {employeeShape} from '../../../../app.shapes'
import './selection.css'
import cross from './cross.svg'

const Selection = ({
  isDisabled,
  onRemoveSelection,
  selectedEmployee
}) => (
  <div
    className='selection'
    data-role='selection'
    tabIndex={0}
    role='button'
  >
    <Avatar
      avatarURL={selectedEmployee.avatar}
      name={selectedEmployee.name}
    />
    <div className='nameWrapper'>
      <div className='name'>{selectedEmployee.name}</div>
      <address className='email'>{selectedEmployee.email}</address>
    </div>
    {!isDisabled && (
      <button
        className='removeSelection'
        data-role='removeSelection'
        disabled={isDisabled}
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
