import React from 'react';
import './App.css';

const City = ({ nameCity, country }) => {
    return (
        <div className="heading">
            <h1>{nameCity}</h1>
            <h2>{country}</h2>
        </div>
    );
}

export default City;