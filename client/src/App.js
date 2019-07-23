import React from 'react';

// Import any components AFTER the main style import because other stylesheets from other components need to be imported sequentially
import './css/style.css';

import logo from './img/logo-white.png';

function App() {
  return (
    <div className="App">
      {/* Landing page of the site */}
      <header className="header">
        {/* Images are inline elements, so it's best to but images in boxes (divs) first and then position the box rather than the image itself */}
        {/* alt property is for SEO and to act as text if the image fails to load */}
        <div className="logo-box">
          <img className="logo" src={logo} alt="Natours Logo" />
        </div>
        
        {/* Since we also have a button, we should put the heading and button in a box and center the entire box so that everything is centered rather than just the text */}
        <div className="text-box"> 
          {/* The most important heading for SEO, so it's good to put as much text in here as possible (we  style the subtext to look like it's actually a subtext with span elements) */}
          <h1 className="heading-primary">  
            <span className="heading-primary-main">Outdoors</span>
            <span className="heading-primary-sub">Is where life happens</span>
          </h1>

          {/* Define two classes for buttons where 'btn' adds styling common among all buttons, and btn-white adds styling specifically for white buttons */}
          <a href="#" className="btn btn-white">Discover our tours</a>
        </div>
      </header>
    </div>
    );
}

export default App;
