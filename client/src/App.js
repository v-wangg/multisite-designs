import React from 'react';

// Import any components AFTER the main style import because other stylesheets from other components need to be imported sequentially
import './css/style.css';

import logo from './img/logo-white.png';

function App() {
  return (
    <div className="App">
      {/* Landing section of the site - this is also a block in the BEM system since we can easily reuse it as a standalone component */}
      <header className="header">
        {/* Images are inline elements, so it's best to but images in boxes (divs) first and then position the box rather than the image itself */}
        {/* alt property is for SEO and to act as text if the image fails to load */}
        {/* This logo box is a BEM element of the header block since we can't really use it anywhere else - it's styled based on the header and is a part of it, so we will name it accordingly */}
        <div className="header__logo-box">
          {/* This logo is also just an element of the header since this logo with this exact size and image only really exists in the header */}
          <img className="header__logo" src={logo} alt="Natours Logo" />
        </div>
        
        {/* Since we also have a button, we should put the heading and button in a box and center the entire box so that everything is centered rather than just the text */}
        {/* This specific text box (with animations and all) is also a part of the header and it doesn't make sense to use it anywhere else on its own, so it's a BEM element of it */}
        <div className="header__text-box"> 
          {/* The most important heading for SEO, so it's good to put as much text in here as possible (we  style the subtext to look like it's actually a subtext with span elements) */}
          {/* This primary heading can actually be a block, since if we ever wanted to use this primary heading elsewhere we could easily do so, so it's a standalone block */}
          <h1 className="heading-primary">  
            {/* These bits of text styled and animated in the way that they're done create a very specific version of the heading-primary block, so they are BEM modifiers of the heading-primary block */}
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">Is where life happens</span>
          </h1>

          {/* Define two classes for buttons where 'btn' adds styling common among all buttons, and btn-white adds styling specifically for white buttons */}
          <a href="#" className="btn btn--white btn--fade-in">Discover our tours</a>
        </div>
      </header>
    </div>
    );
}

export default App;
