import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.retrievePosts();
    }

    retrievePosts() {
        axios.get("http://localhost:8000/post/get").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
                console.log(this.state.posts)
            }
        });
    }

    render() {
        return (
            <div className="container">
                <p>All Posts</p>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">State</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map((posts, index) => (<tr>
                        <th scope="row">{index + 1}</th>
                        <td>
                            <a href={`/post/get/{posts.id}`} style={{textDecoration:'none'}}>
                            {posts.name} </a> </td>
                        <td>{posts.state}</td>
                        <td>{posts.salary}</td>
                        <td>
                            <a className="btn btn-warning" href="#">
                                <i className="fas fa-edit"></i>&nbsp;Edit
                            </a>
                            &nbsp; &nbsp;
                            <a className="btn btn-danger" href="#">
                                <i className="far fa-trash-alt"></i>&nbsp;Delete
                            </a>
                        </td>
                    </tr>))}
                    </tbody>
                </table>

                <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Create Post</a></button>

            </div>
        )
    }
}