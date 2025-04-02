import React from 'react'
import { ImageContext } from '../ImageContext'
import Form from './Form';
import Images from './Images';
import './UnSplash.css'

const Unsplash = () => {
  return (
    <div>
      <div className='page-container'>
        <Form />
        <Images />
    </div>
    </div>
  )
}

export default Unsplash




