import React, {/* useState , */useEffect} from 'react'
import fetchEmployees from './app.consumer'
import AppPresenter from './app.presenter'

const App = () => {
  useEffect(() => {
    fetchEmployees({pageLength: 30, pageNumber: 1, query: 'Ni'}).then(console.log)
  }, [])
  return (
    <AppPresenter />
  )
}

export default App
