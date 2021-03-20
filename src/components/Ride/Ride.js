import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Ride.css';
import map from '../../images/Map.png';
const Ride = () => {
    const {transport} = useParams();
    return (
        <div>
            <div className="customer">
                <p>Pick From</p>
                <input className="start" type="text" placeholder="Mohakhali"/>
                <br/>
                <p>Pick To</p>
                <input className="end" type="text" placeholder="Wireless"/>
                <br/>
                <Link to={`/detailride/${transport}`} className="search-btn">Search {transport}</Link>
            </div>
                <div className="map-container">
                <img src={map} alt=""/>
                </div>
        </div>
    );
};

export default Ride;