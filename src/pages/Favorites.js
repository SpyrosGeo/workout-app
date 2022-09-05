import React from 'react'
import { getLocalStorageData} from '../Utils/fetchData'

function Favorites() {
    const storage = getLocalStorageData()
    console.log('storage',storage)
  return (
    <div>Favorites</div>
  )
}

export default Favorites