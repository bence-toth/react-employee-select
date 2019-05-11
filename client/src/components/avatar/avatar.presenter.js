import React from 'react'
import {string} from 'prop-types'

import {generateMonogram, generateBackgroundColor} from './avatar.utility'
import './avatar.css'

const Avatar = ({
  avatarURL,
  name
}) => (
  <div className='avatarWrapper'>
    <div className='avatar'>
      {avatarURL && (
        <img
          src={avatarURL}
          alt=''
        />
      )}
      <div
        aria-hidden='true'
        className='monogram'
        style={{backgroundColor: generateBackgroundColor({name})}}
      >
        {generateMonogram({name})}
      </div>
    </div>
  </div>
)

Avatar.propTypes = {
  avatarURL: string,
  name: string.isRequired
}

export default Avatar
