import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { getFeatures } from '../redux/features/featureSelectors'

export const Features: FunctionComponent = () => {
  const _features = useSelector(getFeatures)

  return (
    <div>
      <h1>Features</h1>
      <div className="features">{JSON.stringify(_features)}</div>
    </div>
  )
}
