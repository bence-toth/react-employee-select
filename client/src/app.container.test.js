import React from 'react'
import ReactDOM from 'react-dom'

import Container from './app.container'

describe('App container tests_', () => {
  it('Container renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Container />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
