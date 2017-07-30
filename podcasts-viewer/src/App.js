import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Podcasts from './views/podcasts/podcasts.component';

class App extends Component {
  render() {
    return (
      <article>
        <header>
          <div>
            <Link to={`/`}><h1>Podcaster</h1></Link>
          </div>
        </header>
        <div className="pv-container">
          <Podcasts />
        </div>
      </article>
    );
  }
}

export default App;
