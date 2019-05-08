import React from 'react'
import {string, func, number, arrayOf, shape} from 'prop-types'
import classNames from 'classnames'

import {generateMonogram, generateBackgroundColor} from './app.utilitiy'
import './app.css'
import caret from './caret-down.svg'

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
      <div className='employeeSelect'>
        <div className='queryInputWrapper'>
          <input
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
          <div className='suggestionsWrapper' tabIndex={-1}>
            <ul>
              {suggestions.map(({attributes: {id, name, email, avatar}}) => (
                <li key={id}>
                  <button className='suggestion' type='button'>
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
      <hr />
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
      </button>
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
