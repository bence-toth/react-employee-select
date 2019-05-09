import React from 'react'

import {copyShape} from '../../../app.shapes'
import './fetchErrorMessage.css'

const FetchErrorMessage = ({copy}) => (
  <div className='fetchError'>
    {copy.managerFetchError.map(line => (
      <p>{line}</p>
    ))}
  </div>
)

FetchErrorMessage.propTypes = {
  copy: copyShape
}

export default FetchErrorMessage
