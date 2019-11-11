import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Client = props => (
    <tr>
        <td>{props.client.client_gender}</td>
        <td>{props.client.client_firstname}</td>
        <td>{props.client.client_familyname}</td>
        <td>{props.client.client_mail}</td>
        <td>{props.client.client_password}</td>
        <td>{props.client.client_school}</td>
        <td>
            <Link to={"/edit/"+props.client._id}>Edit</Link>

        </td>
    </tr>
)

export default class ClientsList extends Component {

    constructor(props) {
        super(props);
        this.state = {clients: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/clients/')
            .then(response => {
                this.setState({ clients: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    clientList() {
        return this.state.clients.map(function(currentClient, i){
            return <Client client={currentClient} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Clients List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Gender</th>
                            <th>First Name</th>
                            <th>Family Name</th>
                            <th>Mail</th>
                            <th>Password</th>
                            <th>School</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.clientList() }
                    </tbody>
                </table>
            </div>
        )
    }
}