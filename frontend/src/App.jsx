import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Sidebar from './components/Sidebar'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ExplorePage from './pages/ExplorePage'
import LikePage from './pages/LikePage'


const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/likes' element={<LikePage />} />
        </Routes>
      </div>

    </div>
  )
}

export default App