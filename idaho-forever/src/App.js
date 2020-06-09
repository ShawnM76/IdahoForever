import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Home from './components/Home.js';

import './App.css';
import NavBar from './components/NavBar.js';
import Brews from './components/Brews.js';
import image1 from './images/image-1.JPG';
import logo from './images/Logo.JPG';

function App() {
  return (
    <div className='App'>
      <div className='top-images'>
        <img src={image1} alt='image1' className='Image1' />
        {/* <img src={logo} alt='logo' className='Logo' /> */}
        <Router>
          <NavBar />
          <Route exact path={'/'} component={Home} />
          <Route path={'brews'} component={Brews} />
        </Router>
      </div>
      <header className='App-header'></header>
    </div>
  );
}

export default App;
