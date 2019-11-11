import React, { Component } from 'react';
export default class Login extends Component {

    constructor(props) {
        super(props);

        this.onChangeClientMail = this.onChangeClientMail.bind(this);
        this.onChangeClientPassword = this.onChangeClientPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            client_mail: '',
            client_password: ''
        }
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
        
        console.log(`Form submitted:`);
        console.log(`Client Mail: ${this.state.client_mail}`);
        console.log(`Client Password: ${this.state.client_password}`);

            this.props.history.push('/charts');

        this.setState({
            client_firstname:'',
            client_familyname:'',
            client_mail: '',
            client_password: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>You already have your account ? Log in below.</h3>
                <form onSubmit={this.onSubmit}>
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
                        <input type="submit" value="Log In" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}