import React, { Component } from 'react';
import axios from 'axios'


class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            userposts: true,
            posts: []
        }
    }

    // componentDidMount() {
    //     axios.get('/api/posts').then( res => {
    //         console.log(res.data);
            
    //         this.setState({
    //             posts: res.data
    //         })
    //     })
    // }

    handleInput(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        
        this.setState({
            [name]: value
        })
    }

    render() {
        const { search, userposts, posts } = this.state;

        const postList = posts.map( (post, i) => {
            return(
                <div className="post" key={ i }>
                    <h2>{ post.posttitle }</h2>
                    <img src={ post.author.profilepic } alt="profile"/>
                    <h3>{ post.author }</h3>


                </div>
            )
        })
        return(
            <div className="logged-in-content">
                <input name="search" onChange={ e => this.handleInput(e) } value={ search } placeholder="Search By Title"/>
                <button>Search</button>
                <button>Reset</button>

                <label >My Posts</label>
                <input name="userposts" onChange={ e => this.handleInput(e) } type="checkbox" checked={ userposts } />

                { posts }

            </div>
        )
    }
}

export default Dashboard;