import React from 'react'

type Props = {
  delay: number
}

export const Carousel: React.FC<Props> = ({ delay, children }) => {
  const [curr, setCurr] = React.useState(0)
  const [timestamp, setTimestamp] = React.useState(Date.now())
  const _children = React.Children.toArray(children)
  const countChildren = _children.length

  if (!countChildren) {
    return <div className="carousel" />
  }

  const rotateChild = () => {
    const next = curr + 1
    setCurr(next >= countChildren ? 0 : next)
  }

  const previousChild = () => {
    setCurr(curr === 0 ? countChildren - 1 : curr - 1)
    setTimestamp(Date.now())
  }

  const nextChild = () => {
    rotateChild()
    setTimestamp(Date.now())
  }

  React.useEffect(() => {
    const interval = setInterval(() => rotateChild(), delay)
    return () => clearInterval(interval)
  }, [_children, timestamp])

  return (
    <div className="carousel">
      <div className="current">{_children[curr]}</div>
      {countChildren > 1 && (
        <div className="buttons">
          <button onClick={nextChild} className="button-next" type="button">
            Next
          </button>
          <button onClick={previousChild} className="button-previous" type="button">
            Previous
          </button>
        </div>
      )}
    </div>
  )
}
