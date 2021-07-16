import React from 'react'

const PageContainer = (props: {
  title: string
  children: React.ReactNode
}): JSX.Element => {
  return (
    <div className="page-container">
      <h1 className="page-title">{props.title}</h1>
      <div className="page-content">{props.children}</div>
    </div>
  )
}

export default PageContainer
