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
        axios.get("/post/get").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
                console.log(this.state.posts)
            }
        });
    }

    onDelete = (id) => {
        axios.delete(`/post/delete/${id}`).then((res) => {
            alert("Delete Successfully.");
            this.retrievePosts();
        })
    }

    filterData(posts, searchKey) {
        const result = posts.filter((post) => post.name.toLowerCase().includes(searchKey) || post.state.toLowerCase().includes(searchKey) || post.salary.toLowerCase().includes(searchKey))
        this.setState({posts: result})
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("/post/get").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingPosts, searchKey)
            }
        });
    }

    render() {
        return (<div className="container overflow-auto">
            <div className="row">
                <div className="col-lg-9 mt-2 mb-2">
                    <h4>All Posts</h4>
                </div>
                <div className="col-lg-3 mt-3 mb-2">
                    <input className="form-control" type="search" placeholder="Search" name="searchQuery"
                           onChange={this.handleSearchArea}>
                    </input>
                </div>
            </div>
            <table className="table table-secondary text-center table-striped mt-3 table-bordered table-hover">
                <thead className="text-light table-dark text-center  table-bordered">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">State</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {this.state.posts.map((posts, index) => (<tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                        <a href={`/post/get/${posts._id}`} style={{textDecoration: 'none'}}>
                            {posts.name} </a></td>
                    <td>{posts.state}</td>
                    <td>{posts.salary}</td>
                    <td>
                        &nbsp; &nbsp;
                        <a className="btn btn-warning" href={`/post/update/${posts._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp; &nbsp;
                        <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
                    </td>
                </tr>))}
                </tbody>
            </table>

            <button className="btn btn-success"><a href="/post/save" style={{textDecoration: 'none', color: 'white'}}>Create
                Post</a></button>
            {/*&nbsp; &nbsp;*/}
            {/*<button className="btn btn-warning"><a href="/edit" style={{textDecoration: 'none', color: 'black'}}><i*/}
            {/*    className="fas fa-edit"></i>&nbsp;Edit</a></button>*/}
            {/*&nbsp; &nbsp;*/}
            {/*<button className="btn btn-danger"><a href="/Delete" style={{textDecoration: 'none', color: 'white'}}><i*/}
            {/*    className="far fa-trash-alt"></i>&nbsp;Delete</a></button>*/}

        </div>)
    }
}