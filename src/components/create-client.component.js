import React, { Component } from 'react';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



export default class CreateClient extends Component {

    
    constructor(props) {
        super(props);

        this.onChangeClientGender = this.onChangeClientGender.bind(this);
        this.onChangeClientFirstName = this.onChangeClientFirstName.bind(this);
        this.onChangeClientFamilyName = this.onChangeClientFamilyName.bind(this);
        this.onChangeClientMail = this.onChangeClientMail.bind(this);
        this.onChangeClientPassword = this.onChangeClientPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            client_gender:'',
            client_firstname:'',
            client_familyname:'',
            client_mail: '',
            client_password: ''
        }
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

    onChangeClientGender(e) {
        this.setState({
            client_gender: e.target.value
        });
    }
    
    onSubmit(e) {
        var boynumber=0;
        var girlnumber=0;
        if(this.state.client_gender==='M'){
            boynumber=boynumber++;
        }else{
            girlnumber=girlnumber++;
        }
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Client First Name: ${this.state.client_firstname}`);
        console.log(`Client Mail: ${this.state.client_familyname}`);
        console.log(`Client Mail: ${this.state.client_mail}`);
        console.log(`Client Password: ${this.state.client_password}`);
        console.log(`Client Gender: ${this.state.client_gender}`);
        console.log(`nb gars: ${boynumber}`);
        console.log(`nb filles: ${girlnumber}`);

        const newClient = {
            client_gender: this.state.client_gender,
            client_firstname: this.state.client_firstname,
            client_familyname: this.state.client_familyname,
            client_mail: this.state.client_mail,
            client_password: this.state.client_password,
            client_school: this.state.client_school
        };

        axios.post('http://localhost:4000/clients/add', newClient)
            .then(res => console.log(res.data));

        this.setState({
            client_gender:'',
            client_firstname:'',
            client_familyname:'',
            client_mail: '',
            client_password: '',
            client_school:''
        })
    }

    render() {
        return (

            <div style={{marginTop: 10}}>
                <h3>You are a new student and you don't have an account ? Fulfill this form to register.</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    
                    <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="GenderOptions" 
                                    id="MaleGender" 
                                    value="M"
                                    checked={this.state.client_gender==='M'} 
                                    onChange={this.onChangeClientGender}
                                    />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="GenderOptions" 
                                    id="FemaleGender" 
                                    value="F"
                                    checked={this.state.client_gender==='F'} 
                                    onChange={this.onChangeClientGender}
                                    />
                            <label className="form-check-label">Female</label>
                        </div>
                        <br></br>
                    
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
                    <div>
                    <InputLabel id="demo-simple-select-label">School :</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.client_school}
                    >
          <MenuItem value={1}>ESIEA</MenuItem>
          <MenuItem value={2}>SKEMA</MenuItem>
          <MenuItem value={3}>Polytechnique</MenuItem>
        </Select>
        </div>
        <p> </p>
                    <div className="form-group">
                        <button type="submit" value="Create Client" className="btn btn-primary">
                            Create a new Account
                            </button>
                    </div>
                </form>
            </div>
        )
    }
}
