import React from 'react'

const RoundButton = (props: {
  id: string | null
  handler: () => void | null
  children: JSX.Element | string
}): JSX.Element => {
  const {id, handler, children} = props
  return (
    <div id={id} className="round-button" onClick={() => handler()}>
      {children}
    </div>
  )
}

export default RoundButton
