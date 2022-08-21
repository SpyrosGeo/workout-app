import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {exerciseOptions as options,fetchData, youtubeOptions} from '../Utils/fetchData'

import Detail from './Detail'
import ExerciseVideos from './ExerciseVideos'
import SimilarExercise from './SimilarExercise'



function ExerciseDetail() {
  const [exerciseDetail,setExerciseDetail] = useState({})
  const [exerciseVideos,setExerciseVideos] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    const fetchExercisesData = async()=>{
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`,options)

      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`,youtubeOptions)

      setExerciseVideos(exerciseVideosData)

    }
    fetchExercisesData()
  },[id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos/>
      <SimilarExercise />
    </Box>
  )
}

export default ExerciseDetail