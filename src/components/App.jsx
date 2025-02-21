import Header from './Header.jsx'
import Footer from './Footer.jsx'
import React from 'react';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import ModelViewer from './ModelViewer.jsx';



function App() {

  return(

    <>

    <ModelViewer />
    <Skills />
    <About />
    <Projects />
    <Contact />
    <Header/>
    <Footer/>
    </>
    
  );
  
}

export default App
