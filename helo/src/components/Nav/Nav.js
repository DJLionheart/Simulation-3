import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';

function Nav(props) {
    
    return(
        <div className="nav-bar">

            <img className="circular-image" src={ props.profilepic } alt="userprofile"/>
            <p>{ props.username }</p>

            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/new'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>
        </div>
    )

}

function mapStateToProps(state) {
    return {
        username: state.username,
        profilepic: state.profilepic
    }
}

export default connect(mapStateToProps)(Nav);