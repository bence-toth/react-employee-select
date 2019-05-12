/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import {text} from '@storybook/addon-knobs'

import Readme from './avatar.readme'
import Avatar from '../../../src/components/avatar/avatar.presenter'
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

const main = () => {
  const name = text(nameKnob.label, nameKnob.defaultValue)
  return (
    <article>
      <h1>Avatar</h1>
      <h2>Preview</h2>
      <div className='avatarContainer'>
        <Avatar name={name} />
      </div>
      <h2>Introduction</h2>
      <p>
        The
        <code>Avatar</code>
        represents a user in the application.
      </p>
      <p>It is typically used together with the user name.</p>
      <Readme {...{name}} />
    </article>
  )
}

const avatarImage = () => {
  const name = text(nameKnob.label, nameKnob.defaultValue)
  const avatarURL = text(avatarURLKnob.label, avatarURLKnob.defaultValue)
  return (
    <article>
      <h1>Avatar</h1>
      <h2>Preview</h2>
      <div className='avatarContainer'>
      <Avatar
          name={name}
          avatarURL={avatarURL}
        />
      </div>
      <h2>Introduction</h2>
      <p>
        The
        <code>Avatar</code>
        represents a user in the application.
      </p>
      <p>It is typically used together with the user name.</p>
      <Readme {...{name, avatarURL}} />
    </article>
  )
}

export default {main, avatarImage}
