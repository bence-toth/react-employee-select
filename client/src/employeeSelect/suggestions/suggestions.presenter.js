import React from 'react'
import {arrayOf, func, bool} from 'prop-types'

import Suggestion from './suggestion/suggestion.presenter'
import NoResultsMessage from './noResultsMessage/noResultsMessage.presenter'
import FetchErrorMessage from './fetchErrorMessage/fetchErrorMessage.presenter'
import Spinner from '../../spinner/spinner.presenter'
import {employeeShape, copyShape} from '../../app.shapes'
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
    onScroll={({target}) => {
      const {scrollTop, scrollHeight, offsetHeight} = target
      const distanceFromBottom = scrollHeight - (scrollTop + offsetHeight)
      const distanceFromEdgeThreshold = 10
      if (distanceFromBottom < distanceFromEdgeThreshold) {
        onFetchNextPage()
      }
    }}
    tabIndex={-1}
  >
    {hasFetchError && (
      <FetchErrorMessage
        copy={
          (({managerFetchError}) =>
            ({managerFetchError})
          )(copy)
        }
      />
    )}
    {!hasFetchError && ((suggestions.length > 0)
      ? (
        <ul>
          {suggestions.map(({attributes: {id, name, email, avatar}}) => (
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
          copy={
            (({managerNoQueryResults}) =>
              ({managerNoQueryResults})
            )(copy)
          }
        />
      ))
    }
    {isNextPageFetching && !hasFetchError && (
      <div className='spinnerWrapper'>
        <Spinner />
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
