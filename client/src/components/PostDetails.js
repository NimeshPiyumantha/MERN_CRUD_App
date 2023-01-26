import React, {Component} from 'react';
import axios from 'axios';

export default class PostDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`/post/get/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });
    }

    render() {
        const {name,state,salary} = this.state.post;
        return (
           <div style={{marginTop:'20px'}}>
               <h4>{name}</h4>
               <hr/>

               <ul className="row">
                   <dt className="col-sm-3">Salary</dt>
                   <dd className="col-sm-9">{salary}</dd>

                   <dt className="col-sm-3">State</dt>
                   <dd className="col-sm-9">{state}</dd>
               </ul>

           </div>
        );
    }
}