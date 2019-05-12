import React from 'react'
import ReactDOM from 'react-dom'

import Presenter from './app.presenter'

describe('App container tests_', () => {
  it('Container renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Presenter
        query=''
        suggestions={null}
        selectedEmployee={null}
        copy={{}}
        onFetchNextPage={() => {}}
        onQueryChange={() => {}}
        onSelectEmployee={() => {}}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
