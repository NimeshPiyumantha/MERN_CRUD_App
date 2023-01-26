import React, {Component} from 'react';
import axios from "axios";

export default class EditPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            state:"",
            salary:""
        };
    }

    handleInputChange=(e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        });
    }

    onSubmit=(e) =>{
        e.preventDefault();
        // const id = this.props.match.params.id;
        const id = '63c92e29d1d2e2afeef4720a';

        const {name,state,salary} = this.state;

        const data={
            name:name,
            state:state,
            salary:salary
        }
        console.log(data);
        axios.put(`/post/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Post Update Successfully.")
                this.setState(
                    {
                        name:name,
                        state:state,
                        salary:salary
                    }
                )
            }
        });
    }
    componentDidMount() {
        // const id = this.props.match.params.id;
        // const { id } = this.props.match.params;

        const id = '63c92e29d1d2e2afeef4720a';

        axios.get(`/post/get/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    name:res.data.post.name,
                    state:res.data.post.state,
                    salary:res.data.post.salary
                });
                console.log(this.state.post);
            }
        });
    }
    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Enter Name"
                               value={this.state.name} onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>State</label>
                        <input type="text" className="form-control" name="state" placeholder="Enter state"
                               value={this.state.state} onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Salary</label>
                        <input type="text" className="form-control" name="salary" placeholder="Enter salary"
                               value={this.state.salary} onChange={this.handleInputChange}/>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i> &nbsp; Update
                    </button>
                </form>
            </div>
        );
    }
}