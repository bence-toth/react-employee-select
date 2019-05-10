/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import {select} from '@storybook/addon-knobs'

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
      <h1>Spinner</h1>
      <p>
        The
        <code>Spinner</code>
        suggests that the user must wait for some action in the application.
      </p>
      <p>It is typically used when waiting for responses to requests over HTTP.</p>

      <h2>Props</h2>

      <h3><code>size</code></h3>
      <p>Control the size of the spinner.</p>
      <p>
        It is a string value and it can be either
        <code>tiny</code>
        ,
        <code>small</code>
        ,
        <code>normal</code>
        , or
        <code>big</code>
        .
      </p>
      <p>
        Its current value is
        <code>{size}</code>
        . You can change that using the knobs.
      </p>
      <p>
        Its default value is
        <code>normal</code>
        .
      </p>

      <h3><code>thickness</code></h3>
      <p>Control the thickness of the spinner.</p>
      <p>
        It is a string value and it can be either
        <code>thin</code>
        ,
        <code>normal</code>
        , or
        <code>thick</code>
        .
      </p>
      <p>
        Its current value is
        <code>{thickness}</code>
        . You can change that using the knobs.
      </p>
      <p>
        Its default value is
        <code>normal</code>
        .
      </p>

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
