import React, { Component } from 'react';
import genderimage from './sexe.jpeg'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <p>Welcome Motherfucker !</p>
                <img src={genderimage} width="40%" height="40%" alt="CodingTheSmartWay.com" />
                <p> Nombre de filles : / Nombre de garçons : </p>
            </div>
        )
    }
}