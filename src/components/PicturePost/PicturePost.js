import React from 'react'
import './styles.css'

export default function PicturePost({ image, title }) {
  return (
    <div id='image-post'>
      <img src={image} />
      <span>{title}</span>
    </div>
  )
}
