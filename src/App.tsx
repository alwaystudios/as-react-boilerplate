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
import { Categories } from './components/Categories'
import { getCookie, setCookie } from './hooks/useCookie'
import { Test } from './components/Codility/Test'
import { Sockets } from './components/Sockets'
import { Beers } from './components/Beers'

const SEPARATOR = '|'

const getFeatures = (qsParams: any): FeaturesType => {
  const cookieFeatures = getCookie('features')

  const queryStringFeatures = unnest([qsParams.feature || []]).reduce(
    (result, feature) => ({
      ...result,
      [feature.split(SEPARATOR)[0]]: feature.split(SEPARATOR)[1],
    }),
    {},
  )

  return { ...cookieFeatures, ...queryStringFeatures }
}

const App: FunctionComponent = () => {
  const location = useLocation()
  const qsParams = parse(location.search)
  const dispatch = useDispatch()

  useEffect(() => {
    const features = getFeatures(qsParams)
    if (Object.keys(features).length > 0) {
      dispatch(setFeatures(features))
      setCookie('features', features)
    }
  }, [qsParams])

  return (
    <div className="App">
      <Link className="menu-link" to={`/`}>
        Home
      </Link>
      <Link className="menu-link" to={`/beers`}>
        Beers
      </Link>
      <Link className="menu-link" to={`/sockets`}>
        Web sockets
      </Link>
      <Link className="menu-link" to={`/test`}>
        Test
      </Link>
      <Link className="menu-link" to={`/todos`}>
        Todos
      </Link>
      <Link className="menu-link" to={`/categories`}>
        Categories
      </Link>
      <Link className="menu-link" to={`/features`}>
        Features
      </Link>
      <Switch>
        <Route path="/sockets">
          <Sockets />
        </Route>
        <Route path="/beers">
          <Beers />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/todos">
          <Todos />
        </Route>
        <Route path="/features">
          <Features />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </div>
  )
}

export default App
