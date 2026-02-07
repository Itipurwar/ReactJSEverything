import React from 'react'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Product from './pages/Product'
import Contact from './pages/Contact'
import CourseDetail from './pages/CourseDetail'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'


import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/courses' element={<Courses />}/>
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:courseId' element={<CourseDetail />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/product' element={<Product />}>
            <Route path='men' element={<Men />}/>
            <Route path='kids' element={<Kids />}/>
            <Route path='women' element={<Women />}/>
          </Route>
          
          
          
          <Route path='*' element={<NotFound />} />
        </Routes>

      <Footer />
      
    </div>
  )
}

export default App