import './App.css'
import React, { FunctionComponent, useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { parse } from 'query-string'
import { Todos } from './components/Todos'
import { unnest } from 'ramda'
import { useDispatch } from 'react-redux'
import { setFeatures } from './redux/features/featureActions'
import { Features } from './components/Features'

const SEPARATOR = '|'

const getQueryStringFeatures = (qsParams: any) =>
  unnest([qsParams.feature || []]).reduce(
    (result, feature) => ({
      ...result,
      [feature.split(SEPARATOR)[0]]: feature.split(SEPARATOR)[1],
    }),
    {},
  )

const App: FunctionComponent = () => {
  const location = useLocation()
  const qsParams = parse(location.search)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setFeatures(getQueryStringFeatures(qsParams)))
  }, [qsParams])

  return (
    <div className="App">
      <Switch>
        <Route path="/todos">
          <Todos />
        </Route>
        <Route path="/features">
          <Features />
        </Route>
      </Switch>
    </div>
  )
}

export default App
