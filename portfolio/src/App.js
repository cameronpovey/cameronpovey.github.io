import React, { useState } from 'react';
import './App.css';

import Home from './pages/home.js';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Contact from './pages/contact';

function App() {
  const pages = ['Projects','Skills','Contact'];

  const [isAnimating, setIsAnimating] = useState(false);
  const [isAnimatingOUT, setIsAnimatingOUT] = useState(false);
  const [clickedButtonIndex, setClickedButtonIndex] = useState(null);

  const [listPages, setPages] = useState(pages);
  const [selectedPage, setSelectedPage] = useState("Home");

  const handlePageClick = (page, index) => {

    setSelectedPage(page);
    setClickedButtonIndex(index);
      
    setIsAnimatingOUT(true)
    setTimeout(() => {
      setIsAnimatingOUT(false)
      setPages(pages.map((item) => (item === page ? 'Home' : item)));
    }, 500);
    
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setClickedButtonIndex(null);
    }, 1250);
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
      <div className='gridBack'>
        <div className="pageList">
            {listPages.map((page, index) => (
              <button key={page} onClick={() => handlePageClick(page, index)} className={`${isAnimatingOUT && index === clickedButtonIndex ? 'notBlinking MIDWAY animatedOUT' : isAnimating && index === clickedButtonIndex ? 'notBlinking animated' : 'selButton'}`} style={{ cursor: 'pointer' }}>
                {page}
              </button>
            ))}
        </div>
        {content}
      </div>
    </div>
  );
}

export default App;