import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/aboutus/About'
import Event from './pages/event/Event'
import Talent from './pages/talent/Talent'
import Contact from './pages/contact/Contact'



function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/event' element={<Event/>}/>
        <Route path='/talent' element={<Talent/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
