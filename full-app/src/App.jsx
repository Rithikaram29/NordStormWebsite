import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import {Routes, Route} from 'react-router-dom'
import SignupPage from './pages/signup'
import CreateAccount from './pages/createAccount'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/createaccount' element={<CreateAccount/>}/>
    </Routes>
    </>
  )
}

export default App
