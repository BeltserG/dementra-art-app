import React from 'react'
import ArtWork from './components/ArtWork/ArtWork'
import cl from"./styles/DigitalGallery.module.scss"
import classNames from 'classnames'

const DigitalGallery = ({data}) => {
  return (
    <div>
      <div>
        {data.works.map(artData =><ArtWork key={artData.id} artData={artData}/>)}
      </div>
    </div>
  )
}

export default DigitalGallery