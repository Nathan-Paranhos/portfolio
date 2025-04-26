import React, { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  useEffect(() => {
    document.title = 'NP Dev | Portfólio';
  }, []);

  return (
    <div className="font-sans text-white bg-background min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
  
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-[100px] animate-pulse delay-1000"></div>

        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, ${colors.primary}05 1px, transparent 1px),
                             linear-gradient(to bottom, ${colors.primary}05 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}>
        </div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

const colors = {
  primary: '#8A2BE2',
  secondary: '#00FFFF',
};

export default App;