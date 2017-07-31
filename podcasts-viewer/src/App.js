import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import Podcasts from './views/podcasts/podcasts.component';

import {isExpired} from './services/localstorage.service';

class App extends Component {
  
  render() {
    let point;
    if (isExpired()) point=(<div className="pv-loading-point"></div>)
    else point=null;
    return (
      <div>
        <header>
          <div>
            <Link to={`/`}><h1>Podcaster</h1></Link>
             {point}
          </div>
        </header>
        <section className="container">
          <Podcasts />
        </section>
        <footer>
          <p>Podcast Viewer - Code available on <a href="https://github.com/rovarela/PodcastsViewer">Github</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
