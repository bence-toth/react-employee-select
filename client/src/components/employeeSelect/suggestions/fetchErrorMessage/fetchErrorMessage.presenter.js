import React from 'react'

import {copyShape} from '../../../../index.shapes'
import './fetchErrorMessage.css'

const FetchErrorMessage = ({copy}) => (
  <div className='fetchError'>
    {copy.employeeFetchError.map((line, lineIndex) => (
      // eslint-disable-next-line react/no-array-index-key
      <p key={lineIndex}>{line}</p>
    ))}
  </div>
)

FetchErrorMessage.propTypes = {
  copy: copyShape
}

export default FetchErrorMessage
