import React, { Component } from 'react';
import { store } from '../index.js';
import { NavBar } from './NavBar.js';
import { config } from '../config.js';
export var firebase = require("firebase");

export function GoogleLogin(){
    //Google login
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var message = "Successfully logged in. Welcome " + result.user.email;
        console.log(message);
        store.dispatch({
            type: 'UPDATE_USER',
            user: result.user.email
        });
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Error " + errorCode + ": " + errorMessage);
    });
}
class App extends Component {
  constructor(props) {
    super(props);

    // Initialize Firebase
    firebase.initializeApp(config);

  }

  render() {
    return (
      <div className="App">
        <NavBar />

        <p>{store.getState().currentUser}</p>

        {/*main body of the page*/}
        <div className="container default">
          <div className="row">
            <div className="col-lg-12">
              <h2 id="title" className="mt-5">React-Boilerplate</h2>
              {/*TODO*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
