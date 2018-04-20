import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import {getUserInfo} from '../../ducks/reducer'; 


class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    registerUser() {
        let { username, password } = this.state;
        axios.post('/api/register', {username: username, password: password}).then( res => {
            let { username, userid, profilepic } = res.data;
            this.props.getUserInfo( userid, username, profilepic );
            this.props.history.push('/dashboard');
    
        })
    }

    login() {
        let { username, password } = this.state;
        axios.post('/api/login', {username: username, password: password}).then( res => {
            let { username, userid, profilepic } = res.data;
            this.props.getUserInfo( userid, username, profilepic );
            this.props.history.push('/dashboard');
           
            
        })
    }


    render() {
        const { username, password } = this.state
        return(
            <div>
                <h1>Helo</h1>
                <form>
                    <label>Username: </label>
                    <input onChange={ (e) => this.handleChange(e) } value={ username } name="username"/>
                    <label>Password: </label>
                    <input onChange={ (e) => this.handleChange(e) } value={ password } name="password"/>
                </form>
                <button onClick={ () => this.login() }>Login</button>
                <button onClick={ () => this.registerUser() }>Register</button>
            </div>
        )
    }
}

export default connect(null, { getUserInfo })(Auth);