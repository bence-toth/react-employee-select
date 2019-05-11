import React from 'react'

import {copyShape} from '../../../../app.shapes'
import './noResultsMessage.css'

const NoResultsMessage = ({copy}) => (
  <div className='noResults'>
    {copy.employeeNoQueryResults.map((line, lineIndex) => (
      // eslint-disable-next-line react/no-array-index-key
      <p key={lineIndex}>{line}</p>
    ))}
  </div>
)

NoResultsMessage.propTypes = {
  copy: copyShape
}

export default NoResultsMessage
