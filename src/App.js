import React from 'react'
import Banner from './Components/Home/Banner';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <>
      <header>
        <div className="banner-section flex-1">
          <Banner />
        </div>
      </header>
      <main>
        <div className="about-section">
          <About />
        </div>
        <div className="resume-section">
          <Resume />
        </div>
        <div className="skills-section">
          <Skills />
        </div>
        <div className="contact-section">
          <Contact />
        </div>
      </main>
    </>
  )
}

export default App
