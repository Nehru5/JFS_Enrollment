import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AddStudent from './pages/AddStudent'
import ViewStudent from './pages/ViewStudent'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/addstudent' element={<AddStudent/>}/>
      <Route path='/viewstudent' element={<ViewStudent/>}/>
    </Routes>
    </>
  )
}

export default App