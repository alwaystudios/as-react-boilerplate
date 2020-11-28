import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { getFeatures } from '../redux/features/featureSelectors'

export const Features: FunctionComponent = () => {
  const _features = useSelector(getFeatures)

  return (
    <>
      Features: <div className="features">{JSON.stringify(_features)}</div>
    </>
  )
}
