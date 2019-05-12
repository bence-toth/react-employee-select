/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable sonarjs/no-duplicate-string */

import React from 'react'
import {boolean, select, text} from '@storybook/addon-knobs'

import Readme from './employeeSelect.readme'
import EmployeeSelect from '../../../src/components/employeeSelect/employeeSelect.presenter'
import {copy, suggestions} from './employeeSelect.props'
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

const main = () => {
  const query = text(queryKnob.label, queryKnob.defaultValue)
  const isDisabled = boolean(isDisabledKnob.label, isDisabledKnob.defaultValue)
  const label = text(labelKnob.label, labelKnob.defaultValue)
  const width = select(sizeKnob.label, sizeKnob.options, sizeKnob.defaultValue)
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
      <h1>EmployeeSelect</h1>
      <h2>Preview</h2>
      <div className='employeeSelectContainer'>
        <EmployeeSelect
          {...props}
          onFetchNextPage={() => {}}
          onQueryChange={() => {}}
          onSelectEmployee={() => {}}
        />
      </div>
      <h2>Introduction</h2>
      <p>
        The
        <code>EmployeeSelect</code>
        lets the user select an employee from a list of employees.
      </p>
      <Readme {...props} />
    </div>
  )
}

const fetching = () => {
  const query = text(queryKnob.label, queryKnob.defaultValue)
  const isDisabled = boolean(isDisabledKnob.label, isDisabledKnob.defaultValue)
  const label = text(labelKnob.label, labelKnob.defaultValue)
  const width = select(sizeKnob.label, sizeKnob.options, sizeKnob.defaultValue)
  const props = {
    copy,
    hasFetchError: false,
    isDisabled,
    isNextPageFetching: false,
    isQueryFetching: true,
    label,
    query,
    selectedEmployee: null,
    suggestions: null,
    uniqueID: 'id',
    width
  }
  return (
    <article>
      <h1>EmployeeSelect</h1>
      <h2>Preview</h2>
      <div className='employeeSelectContainer'>
        <EmployeeSelect
          {...props}
          onFetchNextPage={() => {}}
          onQueryChange={() => {}}
          onSelectEmployee={() => {}}
        />
      </div>
      <h2>Introduction</h2>
      <p>
        The
        <code>EmployeeSelect</code>
        lets the user select an employee from a list of employees.
      </p>
      <Readme {...props} />
    </article>
  )
}

const receivedSuggestions = () => {
  const query = text(queryKnob.label, queryKnob.defaultValue)
  const isDisabled = boolean(isDisabledKnob.label, isDisabledKnob.defaultValue)
  const label = text(labelKnob.label, labelKnob.defaultValue)
  const width = select(sizeKnob.label, sizeKnob.options, sizeKnob.defaultValue)
  const props = {
    copy,
    hasFetchError: false,
    isDisabled,
    isNextPageFetching: false,
    isQueryFetching: false,
    label,
    query,
    selectedEmployee: null,
    suggestions,
    uniqueID: 'id',
    width
  }
  return (
    <article>
      <h1>EmployeeSelect</h1>
      <h2>Preview</h2>
      <div className='employeeSelectContainer'>
        <EmployeeSelect
          {...props}
          onFetchNextPage={() => {}}
          onQueryChange={() => {}}
          onSelectEmployee={() => {}}
        />
      </div>
      <h2>Introduction</h2>
      <p>
        The
        <code>EmployeeSelect</code>
        lets the user select an employee from a list of employees.
      </p>
      <Readme {...props} />
    </article>
  )
}

const fetchingNextPage = () => {
  const query = text(queryKnob.label, queryKnob.defaultValue)
  const isDisabled = boolean(isDisabledKnob.label, isDisabledKnob.defaultValue)
  const label = text(labelKnob.label, labelKnob.defaultValue)
  const width = select(sizeKnob.label, sizeKnob.options, sizeKnob.defaultValue)
  const props = {
    copy,
    hasFetchError: false,
    isDisabled,
    isNextPageFetching: true,
    isQueryFetching: false,
    label,
    query,
    selectedEmployee: null,
    suggestions,
    uniqueID: 'id',
    width
  }
  return (
    <article>
      <h1>EmployeeSelect</h1>
      <h2>Preview</h2>
      <div className='employeeSelectContainer'>
        <EmployeeSelect
          {...props}
          onFetchNextPage={() => {}}
          onQueryChange={() => {}}
          onSelectEmployee={() => {}}
        />
      </div>
      <h2>Introduction</h2>
      <p>
        The
        <code>EmployeeSelect</code>
        lets the user select an employee from a list of employees.
      </p>
      <Readme {...props} />
    </article>
  )
}

const selectedEmployee = () => {
  const isDisabled = boolean(isDisabledKnob.label, isDisabledKnob.defaultValue)
  const label = text(labelKnob.label, labelKnob.defaultValue)
  const width = select(sizeKnob.label, sizeKnob.options, sizeKnob.defaultValue)
  const props = {
    copy,
    hasFetchError: false,
    isDisabled,
    isNextPageFetching: false,
    isQueryFetching: false,
    label,
    query: 'A',
    selectedEmployee: {
      id: '1',
      name: 'Bruce Wayne',
      email: 'bruce@batcave.io',
      avatar: 'https://bit.ly/2Jg25XM'
    },
    suggestions: null,
    uniqueID: 'id',
    width
  }
  return (
    <article>
      <h1>EmployeeSelect</h1>
      <h2>Preview</h2>
      <div className='employeeSelectContainer'>
        <EmployeeSelect
          {...props}
          onFetchNextPage={() => {}}
          onQueryChange={() => {}}
          onSelectEmployee={() => {}}
        />
      </div>
      <h2>Introduction</h2>
      <p>
        The
        <code>EmployeeSelect</code>
        lets the user select an employee from a list of employees.
      </p>
      <Readme {...props} />
    </article>
  )
}

const noResults = () => {
  const query = text(queryKnob.label, queryKnob.defaultValue)
  const isDisabled = boolean(isDisabledKnob.label, isDisabledKnob.defaultValue)
  const label = text(labelKnob.label, labelKnob.defaultValue)
  const width = select(sizeKnob.label, sizeKnob.options, sizeKnob.defaultValue)
  const props = {
    copy,
    hasFetchError: false,
    isDisabled,
    isNextPageFetching: false,
    isQueryFetching: false,
    label,
    query,
    selectedEmployee: null,
    suggestions: [],
    uniqueID: 'id',
    width
  }
  return (
    <article>
      <h1>EmployeeSelect</h1>
      <h2>Preview</h2>
      <div className='employeeSelectContainer'>
        <EmployeeSelect
          {...props}
          onFetchNextPage={() => {}}
          onQueryChange={() => {}}
          onSelectEmployee={() => {}}
        />
      </div>
      <h2>Introduction</h2>
      <p>
        The
        <code>EmployeeSelect</code>
        lets the user select an employee from a list of employees.
      </p>
      <Readme {...props} />
    </article>
  )
}

const networkError = () => {
  const query = text(queryKnob.label, queryKnob.defaultValue)
  const isDisabled = boolean(isDisabledKnob.label, isDisabledKnob.defaultValue)
  const label = text(labelKnob.label, labelKnob.defaultValue)
  const width = select(sizeKnob.label, sizeKnob.options, sizeKnob.defaultValue)
  const props = {
    copy,
    hasFetchError: true,
    isDisabled,
    isNextPageFetching: false,
    isQueryFetching: false,
    label,
    query,
    selectedEmployee: null,
    suggestions: [],
    uniqueID: 'id',
    width
  }
  return (
    <article>
      <h1>EmployeeSelect</h1>
      <h2>Preview</h2>
      <div className='employeeSelectContainer'>
        <EmployeeSelect
          {...props}
          onFetchNextPage={() => {}}
          onQueryChange={() => {}}
          onSelectEmployee={() => {}}
        />
      </div>
      <h2>Introduction</h2>
      <p>
        The
        <code>EmployeeSelect</code>
        lets the user select an employee from a list of employees.
      </p>
      <Readme {...props} />
    </article>
  )
}

export default {
  main,
  fetching,
  receivedSuggestions,
  fetchingNextPage,
  selectedEmployee,
  noResults,
  networkError
}
