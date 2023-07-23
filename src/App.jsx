import { Outlet } from 'react-router-dom';

// import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';
// import ProjectsContainer from './components/Projects/ProjectsContainer/ProjectsContainer';
// import About from './components/About/About';
// import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.css'

const App = () => {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];


  return (
    <>
      <Navbar navLinks={navLinks} />
      <Outlet />
      <Footer />
    </>

    // <>
    //   <AnimatePresence>
    //       <Navbar navLinks={navLinks} />
    //       <Hero />
    //       <ProjectsContainer />
    //       <About />
    //       <Contact />
    //   </AnimatePresence>
    //   <Footer />
    // </>
  );
}

export default App;
