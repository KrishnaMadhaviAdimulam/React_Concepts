import { createContext, useState } from "react"
import axios from 'axios';

export const ImageContext = createContext(null)

const API_URL = 'https://api.unsplash.com/search/photos'
const API_KEY = 'UUS93WadkYtH4rPFyQEOxuFmTb_hhUHnjHyw3HsiGAc'

export const ImageProvider = ({children}) => {
    const [gallery, setGallery] = useState([])
    const Images_Per_Page = 20;
    const [searchInput, setSearchInput] = useState('')

    const changeHandler = e => {
        setSearchInput(e.target.value);
      }
    
      const fetchData = async() =>{
        try{
          const {data} = await axios.get(`${API_URL}?page=1&query=${searchInput}&per_page=${Images_Per_Page}&client_id=${API_KEY}`)
          setGallery(data.results)
          
        }catch(error){
          console.error(error)
        }
      }
      const submitHandler = (e) => {
        e.preventDefault()
        fetchData()
    }

    return (
        <ImageContext.Provider value={{gallery, searchInput, fetchData, submitHandler, changeHandler}}>
            {children}
        </ImageContext.Provider>
    )
}