import React from "react"
import { render } from "react-dom"
import SearchParams from './hooks/SearchParams'

const App = () => {
  return (
    <div>
      We have created an app. 
      <SearchParams />
    </div>
  )
}

render(<App/>, document.getElementById('root'))