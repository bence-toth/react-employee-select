import React from 'react'
import {string, func, number, arrayOf, shape} from 'prop-types'
import classNames from 'classnames'

import {generateMonogram, generateBackgroundColor} from './app.utilitiy'
import './app.css'
import caret from './caret-down.svg'

const roles = {
  suggestion: '[data-role=suggestion]',
  suggestions: '[data-role=suggestions]',
  employeeSelect: '[data-role=employeeSelect]',
  queryInput: '[data-role=queryInput]'
}

const onMouseMove = ({target}) => {
  const {scrollTop, offsetHeight: containerHeight} = target.closest(roles.suggestions)
  const {offsetTop, offsetHeight: elementHeight} = target.closest(roles.suggestion)
  const elementMiddle = offsetTop + (elementHeight * 0.5)
  const isWithinViewport = (scrollTop <= elementMiddle)
    && ((scrollTop + containerHeight) >= elementMiddle)
  if (isWithinViewport) {
    target.focus()
  }
}

const onArrowDown = ({target}) => {
  const {suggestion} = roles
  const nextSuggestion = target.closest(suggestion).nextSibling
  if (nextSuggestion) {
    nextSuggestion.querySelector('button').focus()
  }
}

const onArrowUp = ({target}) => {
  const {suggestion, employeeSelect, queryInput} = roles
  const previousSuggestion = target.closest(suggestion).previousSibling
  if (previousSuggestion) {
    previousSuggestion.querySelector('button').focus()
  }
  else {
    const query = target.closest(employeeSelect).querySelector(queryInput)
    query.focus()
  }
}

const onKeyDown = ({target, key}) => {
  if (key === 'ArrowDown') {
    onArrowDown({target})
  }
  if (key === 'ArrowUp') {
    onArrowUp({target})
  }
}

const App = ({
  query = '',
  suggestions = [],
  totalSuggestionsForQuery,
  onQueryChange,
  onFetchNext = (() => {}),
  nextPageURL = (() => {})
}) => (
  <main>
    <div>
      <div
        className='employeeSelect'
        data-role='employeeSelect'
      >
        <div className='queryInputWrapper'>
          <input
            data-role='queryInput'
            type='text'
            value={query}
            onChange={onQueryChange}
            placeholder='Choose Manager'
            className={classNames(
              'queryInput',
              {showsPlaceholder: query.length === 0}
            )}
          />
          <img
            src={caret}
            className={classNames(
              'caret',
              {upsideDown: suggestions !== null}
            )}
            alt=''
          />
        </div>
        {suggestions && (
          <div data-role='suggestions' className='suggestionsWrapper' tabIndex={-1}>
            <ul>
              {suggestions.map(({attributes: {id, name, email, avatar}}) => (
                <li data-role='suggestion' key={id}>
                  <button
                    className='suggestion'
                    type='button'
                    onMouseMove={onMouseMove}
                    onKeyDown={onKeyDown}
                  >
                    <div className='avatarWrapper'>
                      <div className='avatar'>
                        {avatar && (
                          <img src={avatar} alt={name} />
                        )}
                        <div
                          className='monogram'
                          style={{backgroundColor: generateBackgroundColor({name})}}
                        >
                          {generateMonogram({name})}
                        </div>
                      </div>
                    </div>
                    <div className='nameWrapper'>
                      <div className='name'>{name}</div>
                      <address className='email'>{email}</address>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* <hr />
      <div>
        Query is:
        {query}

        Suggestions (
        {suggestions ? suggestions.length : 0}
        /
        {totalSuggestionsForQuery || 0}
        ):
        {suggestions && (
          <ul>
            {suggestions.map(({attributes: {name}}) => name).map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
        Next URL:
        {nextPageURL}
      </div>
      <input
        type='text'
        onChange={onQueryChange}
      />
      <button
        type='button'
        onClick={onFetchNext}
      >
        Fetch next page
      </button> */}
    </div>
  </main>
)

App.propTypes = {
  query: string.isRequired,
  nextPageURL: string,
  suggestions: arrayOf(shape), // TODO:
  totalSuggestionsForQuery: number,
  onQueryChange: func.isRequired,
  onFetchNext: func.isRequired
}

export default App
