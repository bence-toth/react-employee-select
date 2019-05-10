import React from 'react'
import {select} from '@storybook/addon-knobs'

import Spinner from '../../src/spinner/spinner.presenter'

const defaultStory = () => {
  const sizeKnob = {
    label: 'Size',
    options: {
      Tiny: 'tiny',
      Small: 'small',
      Normal: 'normal',
      Big: 'big',
      None: null
    },
    defaultValue: 'normal'
  }
  const value = select(sizeKnob.label, sizeKnob.options, sizeKnob.defaultValue)
  return (
    <div>
      <h1>Spinner</h1>
      <p>Some info about the spinner</p>
      <p>Looks like this:</p>
      <p>{value}</p>
      <div className='spinnerWrapper'>
        <Spinner width={value} />
      </div>
    </div>
  )
}

export default {defaultStory}
