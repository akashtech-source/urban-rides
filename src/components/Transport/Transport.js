import React from 'react';
import { Link } from 'react-router-dom';
import './Transport.css';
const Transport = (props) => {
    const {img, transport} = props.transport;
    return (
        <div className="transport-container">
            <Link to={`/ride/${transport}`}>
                <div className="transport-type-image">
                    <img src={img} alt=""/>
                </div>
                <div>
                    <h3>{transport}</h3>
                </div>
            </Link>
        </div>
    );
};

export default Transport;