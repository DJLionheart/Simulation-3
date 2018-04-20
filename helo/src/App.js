import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import './App.css';

import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Post from './components/Post/Post';
import Nav from './components/Nav/Nav';


// import routes from './route';



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Auth/>
          <Dashboard/>
          <Form/>
          <Post/>
          <Nav/>
        </div>
      </HashRouter>
    );
  }
}

export default App;