import React from 'react'
import ExerciseCard from '../components/ExerciseCard'
import { getLocalStorageData} from '../Utils/fetchData'
import {Stack} from '@mui/material'

function Favorites() {
    const storage = getLocalStorageData()
    console.log('storage',storage)
  return (
  <Stack mt='100px' direction="row" sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap="wrap" justifyContent="center">

  {storage?.map(exercise =>(<ExerciseCard exercise={exercise} />))}
  </Stack>
  )
}

export default Favorites