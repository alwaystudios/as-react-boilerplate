import './App.css'
import React, { FunctionComponent, useEffect } from 'react'
import { Link, Route, Switch, useLocation } from 'react-router-dom'
import { parse } from 'query-string'
import { Todos } from './components/Todos'
import { unnest } from 'ramda'
import { useDispatch } from 'react-redux'
import { setFeatures } from './redux/features/featureActions'
import { Features } from './components/Features'
import { FeaturesType } from './types'

const SEPARATOR = '|'

const getQueryStringFeatures = (qsParams: any): FeaturesType =>
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
    const features = getQueryStringFeatures(qsParams)
    if (Object.keys(features).length > 0) {
      dispatch(setFeatures(features))
    }
  }, [qsParams])

  return (
    <div className="App">
      <Link to={`/`}>Home</Link>
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
