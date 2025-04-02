import React,{useContext} from 'react'
import { ImageContext } from '../ImageContext'


const Images = () => {
    const {gallery} = useContext(ImageContext)
  return (
    <div className='gallery-container'>
      {gallery.map(image => <img key={image.id} src={image.urls.small}/>)}
    </div>
  )
}

export default Images