import { useState } from 'react'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"

import Landing from './landing/landing.jsx'
import Farmer from './farmer/farmer.jsx'
import Tech from './farmingtech/farmingtech.jsx'

import Footer from './footer/footer.jsx'
import Navbar from './navbar/navbar.jsx'

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/farmer' element={<Farmer/>}/>
        {/* <Route path='/gg' element={<Tech/>}/> */}
      </Routes>
      {/* <Footer/> */}
    </Router>
  )
}


export default App
