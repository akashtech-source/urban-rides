import React, { useEffect, useState } from 'react';
import Transport from '../Transport/Transport';

const Home = () => {
    const [transports, setTransport] = useState([]);
    useEffect(() => {
        fetch('https://api.mocki.io/v1/f1da540e')
        .then(res => res.json())
        .then(data => setTransport(data))
        
    }, [])
    return (
        <div>
            {
                transports.map(transport => <Transport transport={transport}></Transport>)
            }
        </div>
    );
};

export default Home;