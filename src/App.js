import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import NavBar from './components/NavBar'
import {Box} from '@mui/material'
import {Route,Routes } from 'react-router-dom'
import Footer from './components/Footer'

import './App.css';


function App() {
  return (
  <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/exercise/:id' element={<ExerciseDetail />} />
    </Routes>
    <Footer />

  </Box>

  );
}

export default App;
