import React from 'react'
import {arrayOf, func} from 'prop-types'

import Suggestion from './suggestion/suggestion.presenter'
import NoResultsMessage from './noResultsMessage/noResultsMessage.presenter'
import {employeeShape} from '../../app.shapes'
import './suggestions.css'

const Suggestions = ({
  suggestions,
  onFetchNextPage,
  onSelectEmployee
}) => (
  <div
    data-role='suggestions'
    className='suggestionsWrapper'
    tabIndex={-1}
    onScroll={({target}) => {
      const {scrollTop, scrollHeight, offsetHeight} = target
      const distanceFromBottom = scrollHeight - (scrollTop + offsetHeight)
      const distanceFromEdgeThreshold = 10
      if (distanceFromBottom < distanceFromEdgeThreshold) {
        onFetchNextPage()
      }
    }}
  >
    {(suggestions.length > 0)
      ? (
        <ul>
          {suggestions.map(({attributes: {id, name, email, avatar}}) => (
            <Suggestion
              key={id}
              id={id}
              name={name}
              email={email}
              avatar={avatar}
              onSelectEmployee={onSelectEmployee}
            />
          ))}
        </ul>
      )
      : (
        <NoResultsMessage />
      )
    }
  </div>
)

Suggestions.propTypes = {
  suggestions: arrayOf(employeeShape),
  onFetchNextPage: func.isRequired,
  onSelectEmployee: func.isRequired
}

export default Suggestions
