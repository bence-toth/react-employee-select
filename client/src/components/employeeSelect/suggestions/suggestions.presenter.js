import React from 'react'
import {arrayOf, func, bool} from 'prop-types'

import Suggestion from './suggestion/suggestion.presenter'
import NoResultsMessage from './noResultsMessage/noResultsMessage.presenter'
import FetchErrorMessage from './fetchErrorMessage/fetchErrorMessage.presenter'
import Spinner from '../../spinner/spinner.presenter'
import {onScroll} from './suggestions.eventHandlers'
import {employeeShape, copyShape} from '../../../index.shapes'
import './suggestions.css'

const Suggestions = ({
  copy,
  hasFetchError,
  isNextPageFetching,
  onFetchNextPage,
  onSelectEmployee,
  suggestions
}) => (
  <div
    className='suggestionsWrapper'
    data-role='suggestions'
    onScroll={onScroll({onFetchNextPage})}
    tabIndex={-1}
  >
    {hasFetchError && (
      <FetchErrorMessage
        copy={(
          ({employeeFetchError}) => ({employeeFetchError})
        )(copy)}
      />
    )}
    {!hasFetchError && (
      (suggestions.length > 0)
        ? (
          <ul>
            {suggestions.map(({id, attributes: {name, email, avatar}}) => (
              <Suggestion
                avatar={avatar}
                email={email}
                id={id}
                key={id}
                name={name}
                onSelectEmployee={onSelectEmployee}
              />
            ))}
          </ul>
        )
        : (
          <NoResultsMessage
            copy={(
              ({employeeNoQueryResults}) => ({employeeNoQueryResults})
            )(copy)}
          />
        )
    )}
    {isNextPageFetching && !hasFetchError && (
      <div className='spinnerWrapper'>
        <Spinner thickness='thin' />
      </div>
    )}
  </div>
)

Suggestions.propTypes = {
  copy: copyShape,
  hasFetchError: bool,
  isNextPageFetching: bool,
  onFetchNextPage: func.isRequired,
  onSelectEmployee: func.isRequired,
  suggestions: arrayOf(employeeShape)
}

export default Suggestions
