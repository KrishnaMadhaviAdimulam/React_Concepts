import React,{useContext} from 'react'
import { ImageContext } from '../ImageContext'

const Form = () => {
  const {searchInput,submitHandler,changeHandler} = useContext(ImageContext)
  return (
    <div>
        <form onSubmit={submitHandler}>
          <input type="search" placeholder='Search Gallery' value={searchInput} onChange={changeHandler}/>
          <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Form