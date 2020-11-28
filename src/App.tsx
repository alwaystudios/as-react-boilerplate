import './App.css'
import React, { FunctionComponent } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { parse } from 'querystring'
import { Todos } from './components/Todos'

const App: FunctionComponent = () => {
  const location = useLocation()
  const qsParams = parse(location.search)
  return (
    <div className="App">
      <Switch>
        <Route path="/todos">
          <Todos />
        </Route>
      </Switch>
    </div>
  )
}

export default App
