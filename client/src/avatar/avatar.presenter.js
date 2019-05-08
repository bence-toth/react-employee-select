import React from 'react'
import {string} from 'prop-types'

import {generateMonogram, generateBackgroundColor} from './avatar.utility'
import './avatar.css'

const Avatar = ({name, avatarURL}) => (
  <div className='avatarWrapper'>
    <div className='avatar'>
      {avatarURL && (
        <img src={avatarURL} alt={name} />
      )}
      <div
        className='monogram'
        style={{backgroundColor: generateBackgroundColor({name})}}
      >
        {generateMonogram({name})}
      </div>
    </div>
  </div>
)

Avatar.propTypes = {
  name: string.isRequired,
  avatarURL: string
}

export default Avatar
