import React from 'react'
import { nanoid } from 'nanoid'

const Tags = (props: { tags: string[] }): JSX.Element => {
  return (
    <div className="tags">
      {props.tags.sort().map((tag) => {
        return (
          <p key={nanoid()} className={`tag ${tag}`}>
            {tag}
          </p>
        )
      })}
    </div>
  )
}

export default Tags
