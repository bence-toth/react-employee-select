import React from 'react'
import {arrayOf, shape} from 'prop-types'

import Suggestion from './suggestion/suggestion.presenter'
import './suggestions.css'

const Suggestions = ({suggestions}) => (
  <div data-role='suggestions' className='suggestionsWrapper' tabIndex={-1}>
    <ul>
      {suggestions.map(({attributes: {id, name, email, avatar}}) => (
        <Suggestion
          id={id}
          name={name}
          email={email}
          avatar={avatar}
        />
      ))}
    </ul>
  </div>
)

Suggestions.propTypes = {
  suggestions: arrayOf(shape) // TODO:
}

export default Suggestions