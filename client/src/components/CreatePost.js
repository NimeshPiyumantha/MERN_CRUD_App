import React, {Component} from 'react';
import axios from 'axios';

export default class CreatePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "", state: "", salary: ""
        };
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            ...this.state, [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {name, state, salary} = this.state;

        const data = {
            name: name, state: state, salary: salary
        }
        console.log(data);
        axios.post("/post/save", data).then((res) => {
            if (res.data.success) {
                alert("Save Successfully.");
                this.setState({
                    name: name, state: state, salary: salary
                })
            }
        });
    }

    render() {
        return (<div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Create new Post</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom: '15px'}}>
                        <label style={{marginBottom: '5px'}}>Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Enter Name"
                               value={this.state.name} onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom: '15px'}}>
                        <label style={{marginBottom: '5px'}}>State</label>
                        <input type="text" className="form-control" name="state" placeholder="Enter state"
                               value={this.state.state} onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom: '15px'}}>
                        <label style={{marginBottom: '5px'}}>Salary</label>
                        <input type="text" className="form-control" name="salary" placeholder="Enter salary"
                               value={this.state.salary} onChange={this.handleInputChange}/>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop: '15px'}}
                            onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i> &nbsp; Save
                    </button>
                </form>
            </div>);
    }
}