import React from 'react'
import About from './component/About'
import Home from './component/Home'
import PageNotFound from './component/PageNotFound'
import User from './component/User'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import UserDetails from './component/UserDetails'
import Admin from './component/Admin'
const App = () => {
  return (
    <>
    <h1>this is App component</h1>
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/user' element={<User/>} >
                   <Route path=':userId' element={<UserDetails/>} />
                   <Route path='admin' element={<Admin/>} />
            </Route>
            <Route path='*' element={<PageNotFound/>} />
        </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App


    