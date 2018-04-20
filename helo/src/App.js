import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux'

import './App.css';

import Nav from './components/Nav/Nav';


import routes from './route';

// const conditionalRender = withRouter(props => {
//   {
//     this.props.location.pathname === '/'
//       ? null
//       : (<Nav/>)
//   }
// })


class App extends Component {
  render() {
    return (
      <div className="App">
        {
          this.props.location.pathname === '/'
            ? null
            : <Nav/>
        }
        
        { routes }
          
          
        </div>
    );
  }
}

export default withRouter(App);
