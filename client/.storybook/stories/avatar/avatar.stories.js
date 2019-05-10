/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import {text} from '@storybook/addon-knobs'

import Readme from './avatar.readme'
import Avatar from '../../../src/avatar/avatar.presenter'
import '../stories.css'
import './avatar.stories.css'

const nameKnob = {
  label: 'Name',
  defaultValue: 'Sherlock Holmes'
}

const avatarURLKnob = {
  label: 'Avatar URL',
  defaultValue: 'https://bit.ly/2HcSTkM'
}

const defaultStory = () => {
  const name = text(nameKnob.label, nameKnob.defaultValue)
  return (
    <div>
      <Readme {...{name}} />
      <h2>Preview</h2>
      <div className='avatarContainer'>
        <Avatar name={name} />
      </div>
    </div>
  )
}

const avatarImageStory = () => {
  const name = text(nameKnob.label, nameKnob.defaultValue)
  const avatarURL = text(avatarURLKnob.label, avatarURLKnob.defaultValue)
  return (
    <div>
      <Readme {...{name, avatarURL}} />
      <h2>Preview</h2>
      <div className='avatarContainer'>
        <Avatar
          name={name}
          avatarURL={avatarURL}
        />
      </div>
    </div>
  )
}

export default {defaultStory, avatarImageStory}
