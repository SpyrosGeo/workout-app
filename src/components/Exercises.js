import React, {useEffect,useState} from 'react'
import { Pagination } from '@mui/material'
import { Box, Stack, Typography} from '@mui/material'
import { exerciseOptions as options, fetchData} from '../Utils/fetchData'


import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises,setExercises,bodyPart}) => {
  const [currentPage,setCurrentPage] = useState(1)
  const exercisesPerPage = 9
  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise)

  const ALLURL =`https://exercisedb.p.rapidapi.com/exercises`
  const OTHERURL= `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`
  useEffect(()=>{
    const fetchExercisesData = async()=>{
      let exercisesData = [];
      if(bodyPart ==='all'){
        exercisesData = await fetchData(ALLURL,options)
      }else{
        exercisesData = await fetchData(OTHERURL,options)
      }
      setExercises(exercisesData)
    }
    fetchExercisesData()
  },[bodyPart])

  const paginate = (e,value)=>{
    setCurrentPage(value)
    window.scrollTo({top:1800,behavior:'smooth'})
  }
  return (
  <Box id="exercises"
  sx={{
    mt:{lg:'110px'}
  }}
  mt="50px"
  p="20px"
  >
  <Typography variant="h3"mb="20px">
    Showing Results
  </Typography>
  <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap="wrap" justifyContent="center">
{ currentExercises?.map((exercise,index)=>(
    <ExerciseCard  key={index} exercise={exercise}/> 
  ))
  }
  </Stack>
  <Stack mt="100px" alignItems="center">
  {exercises?.length > exercisesPerPage &&(
    <Pagination 
      color="standard" 
      shape='rounded'
      defaultPage={1}
      count={Math.ceil(exercises?.length / 9)}
      page={currentPage}
      onChange={paginate}
      size="large"
      />
  )}
  </Stack>
  </Box>
  )
}

export default Exercises
