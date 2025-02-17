import { useState } from 'react'
// import ProfilePage from './pages/ProfilePage'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Technology from './components/Technology'
import Projects from './components/Projects'
import ProjectDetails from './pages/ProjectDetails'
// import { Layout, Route } from 'lucide-react'

function App() {
  return (
    <>
      {/* <ProfilePage/> */}

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="skills" element={<Technology/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="projectdetails/:projectId" element={<ProjectDetails/>} />
          {/* <Route path="details/:resId" element={<CardDetails />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
