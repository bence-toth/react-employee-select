/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import {select} from '@storybook/addon-knobs'

import Readme from './spinner.readme'
import Spinner from '../../src/spinner/spinner.presenter'
import './index.stories.css'
import './spinner.stories.css'

const sizeKnob = {
  label: 'Size',
  options: {
    Tiny: 'tiny',
    Small: 'small',
    Normal: 'normal',
    Big: 'big'
  },
  defaultValue: 'normal'
}

const thicknessKnob = {
  label: 'Thickness',
  options: {
    Thin: 'thin',
    Normal: 'normal',
    Thick: 'thick'
  },
  defaultValue: 'normal'
}

const defaultStory = () => {
  const size = select(sizeKnob.label, sizeKnob.options, sizeKnob.defaultValue)
  const thickness = select(thicknessKnob.label, thicknessKnob.options, thicknessKnob.defaultValue)
  return (
    <div>
      <Readme />

      <h2>Preview</h2>
      <div className='spinnerWrapper'>
        <Spinner
          thickness={thickness}
          size={size}
        />
      </div>
    </div>
  )
}

export default {defaultStory}
