import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AIButton from './components/AIButton/AIButton'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AIFloatingButton from './components/AIButton/AIButton'

const App = () => {
  return (
    <>
    <Navbar/>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </main>


    <Footer/>
    <AIFloatingButton/>
    <WhatsAppButton/>
    </>
  )
}

export default App