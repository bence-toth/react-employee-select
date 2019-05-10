/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import {boolean, select, text} from '@storybook/addon-knobs'

import Readme from './employeeSelect.readme'
import EmployeeSelect from '../../../src/employeeSelect/employeeSelect.presenter'
import '../stories.css'
import './employeeSelect.stories.css'

const sizeKnob = {
  label: 'Width',
  options: {
    Narrow: 'narrow',
    Normal: 'normal',
    Wide: 'wide',
    Auto: 'auto'
  },
  defaultValue: 'normal'
}

const isDisabledKnob = {
  label: 'Disabled',
  defaultValue: false
}

const labelKnob = {
  label: 'Label',
  defaultValue: ''
}

const queryKnob = {
  label: 'Query',
  defaultValue: ''
}

const defaultStory = () => {
  const query = text(queryKnob.label, queryKnob.defaultValue)
  const isDisabled = boolean(isDisabledKnob.label, isDisabledKnob.defaultValue)
  const label = text(labelKnob.label, labelKnob.defaultValue)
  const width = select(sizeKnob.label, sizeKnob.options, sizeKnob.defaultValue)
  const copy = {
    managerFetchError: [
      'This went wrong, maybe try something else.',
      'The server says it’s a teapot, so what do I know?'
    ],
    managerNoQueryResults: [
      'Not sure who you are looking for.',
      'Maybe it’s a typo?'
    ],
    managerSelectPlaceholder: 'Choose Manager'
  }
  const props = {
    copy,
    hasFetchError: false,
    isDisabled,
    isNextPageFetching: false,
    isQueryFetching: false,
    label,
    query,
    selectedEmployee: null,
    suggestions: null,
    uniqueID: 'id',
    width
  }
  return (
    <div>
      <Readme {...props} />
      <h2>Preview</h2>
      <div className='employeeSelectContainer'>
        <EmployeeSelect
          {...props}
          onFetchNextPage={() => {}}
          onQueryChange={() => {}}
          onSelectEmployee={() => {}}
        />
      </div>
    </div>
  )
}


export default {defaultStory}
