import React from 'react'

import {copyShape} from '../../../app.shapes'
import './noResultsMessage.css'

const NoResultsMessage = ({copy}) => (
  <div className='noResults'>
    {copy.managerNoQueryResults.map(line => (
      <p>{line}</p>
    ))}
  </div>
)

NoResultsMessage.propTypes = {
  copy: copyShape
}

export default NoResultsMessage
