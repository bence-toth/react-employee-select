import React from 'react'
import {arrayOf, shape, func} from 'prop-types'

import Suggestion from './suggestion/suggestion.presenter'
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
      const disanceFromBottom = scrollHeight - (scrollTop + offsetHeight)
      const distanceFromEdgeThreshold = 10
      if (disanceFromBottom < distanceFromEdgeThreshold) {
        onFetchNextPage()
      }
    }}
  >
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
  </div>
)

Suggestions.propTypes = {
  suggestions: arrayOf(shape), // TODO:
  onFetchNextPage: func.isRequired,
  onSelectEmployee: func.isRequired
}

export default Suggestions
