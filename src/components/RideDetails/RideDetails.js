import React from 'react';
import { useParams } from 'react-router';

const RideDetails = () => {
    const {transport, img} = useParams();
    return (
        <div>
            <h3>this is details</h3>
            <p>name: {transport}</p>
            <img src={img} alt=""/>
        </div>
    );
};

export default RideDetails;