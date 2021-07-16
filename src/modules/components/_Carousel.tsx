import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const Carousel = (props: { images: string[] }): JSX.Element => {
  const [index, setIndex] = useState(0)

  const next = () => {
    if (index === props.images.length - 1) setIndex(0)
    else setIndex(index + 1)
  }

  const prev = () => {
    if (index === 0) setIndex(props.images.length - 1)
    else setIndex(index - 1)
  }

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ backgroundImage: `url(${props.images[index]})` }}
      ></div>
      <i
        className="fas fa-arrow-alt-circle-left left-arrow"
        onClick={() => {
          prev()
        }}
      />
      <i
        className="fas fa-arrow-alt-circle-right right-arrow"
        onClick={() => {
          next()
        }}
      />
      {props.images.length <= 1 ? null : (
        <div className="index-dots">
          {props.images.map((img, idx) => {
            return (
              <i
                key={nanoid()}
                className={
                  idx === index ? `fas fa-circle active` : 'far fa-circle'
                }
                onClick={() => setIndex(idx)}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Carousel
