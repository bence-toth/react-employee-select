/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import {select} from '@storybook/addon-knobs'

import Readme from './spinner.readme'
import Spinner from '../../../src/components/spinner/spinner.presenter'
import '../stories.css'
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

const main = () => {
  const size = select(sizeKnob.label, sizeKnob.options, sizeKnob.defaultValue)
  const thickness = select(thicknessKnob.label, thicknessKnob.options, thicknessKnob.defaultValue)
  return (
    <article>
      <h1>Spinner</h1>
      <h2>Preview</h2>
      <div className='spinnerContainer'>
        <Spinner
          size={size}
          thickness={thickness}
        />
      </div>
      <h2>Introduction</h2>
      <p>
        The
        <code>Spinner</code>
        suggests that the user must wait for some action in the application.
      </p>
      <p>It is typically used when waiting for responses to requests over HTTP.</p>
      <Readme {...{size, thickness}} />
    </article>
  )
}

export default {main}
