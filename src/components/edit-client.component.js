import React, { Component } from 'react';
import axios from 'axios';

export default class EditClient extends Component {

    constructor(props) {
        super(props);

        this.onChangeClientFirstName = this.onChangeClientFirstName.bind(this);
        this.onChangeClientFamilyName = this.onChangeClientFamilyName.bind(this);
        this.onChangeClientMail = this.onChangeClientMail.bind(this);
        this.onChangeClientPassword = this.onChangeClientPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            client_firstname: '',
            client_familyname: '',
            client_mail: '',
            client_password: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/clients/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    client_firstname: response.data.client_firstname,
                    client_familyname: response.data.client_familyname,
                    client_mail: response.data.client_mail,
                    client_password: response.data.client_password
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeClientFirstName(e) {
        this.setState({
            client_firstname: e.target.value
        });
    }

    onChangeClientFamilyName(e) {
        this.setState({
            client_familyname: e.target.value
        });
    }

    onChangeClientMail(e) {
        this.setState({
            client_mail: e.target.value
        });
    }

    onChangeClientPassword(e) {
        this.setState({
            client_password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            client_firstname: this.state.client_firstname,
            client_familyname: this.state.client_familyname,
            client_mail: this.state.client_mail,
            client_password: this.state.client_password
        };
        console.log(obj);
        axios.post('http://localhost:4000/clients/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update a Student</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    
                    <label>First Name: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.client_firstname}
                            onChange={this.onChangeClientFirstName}
                            />
                </div>
                <div className="form-group"> 
                    
                    <label>Family Name: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.client_familyname}
                            onChange={this.onChangeClientFamilyName}
                            />
                </div>
                    <div className="form-group"> 

                        <label>Mail: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.client_mail}
                                onChange={this.onChangeClientMail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input 
                                type="password" 
                                className="form-control"
                                value={this.state.client_password}
                                onChange={this.onChangeClientPassword}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update a Client" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}