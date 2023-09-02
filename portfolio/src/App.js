import React, { useState } from 'react';
import './App.css';

import Home from './pages/home.js';
import Projects from './pages/projects';
import Skills from './pages/skills';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  const pages = ['Projects','Skills','About','Contact'];

  const [isAnimating, setIsAnimating] = useState(false);
  const [clickedButtonIndex, setClickedButtonIndex] = useState(null);

  const [listPages, setPages] = useState(pages);
  const [selectedPage, setSelectedPage] = useState("Home");

  const handlePageClick = (page, index) => {
    setSelectedPage(page);
    setPages(pages.map((item) => (item === page ? 'Home' : item)));
    
    setClickedButtonIndex(index);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setClickedButtonIndex(null); // Clear the clicked button index after animation
    }, 300);
  };

  let content = null

  switch (selectedPage) {
    case 'Home':
      content = <Home />
      break;
    case 'Projects':
      content = <Projects />
      break;
    case 'Skills':
      content = <Skills />
      break;
    case 'About':
      content = <About />
      break;
    case 'Contact':
      content = <Contact />
      break;

    default:
      content = <Home />;
      handlePageClick("Home")
      break;
  }

  return (
    <div className="App">
      <div className="pageList">
          {listPages.map((page, index) => (
            <button key={page} onClick={() => handlePageClick(page, index)} className={`selButton ${isAnimating && index === clickedButtonIndex ? 'animated' : ''}`} style={{ cursor: 'pointer' }}>
              {page}
            </button>
          ))}
      </div>
      {content}
  </div>
  );
}

export default App;