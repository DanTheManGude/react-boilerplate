import React, { Component } from 'react';
import { store } from '../index.js';
import { NavBar } from './NavBar.js';
import { Banner } from './Banner.js';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <NavBar />

        {/*main body of the page*/}
        <div className="container default">
          <div className="row">
            <div className="col-lg-12 intro">
              <h2 id="title" className="mt-5">React-Boilerplate</h2>
              {/*TODO*/}
              <Banner />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
