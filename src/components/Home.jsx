import React from 'react'
import ProfileSection from './ProfileSection'
import About from './About'
import Projects from './Projects'
// import { Contact } from 'lucide-react'
import Technology from './Technology'
import Contact from './Contact'

const Home = () => {
  return (
    <>
        <ProfileSection/>
        <About/>
        <Technology/>
        <Projects/>
        <Contact/>
    </>
  )
}

export default Home