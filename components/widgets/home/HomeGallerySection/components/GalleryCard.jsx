import React from 'react'

const GalleryCard = ({data}) => {
  return (
    <div>
      <img src="" alt={data.id} />
      <h3>{data.id}</h3>
      <p>{data.description}</p>
    </div>
  )
}

export default GalleryCard