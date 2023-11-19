// pages/topGainers.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopGainers = () => {
  const [topGainers, setTopGainers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
       const zerionApi = "";
      try {
        const response = await axios.get(
          `https://api.zerion.io/v1/assets/top-gainers?api_key=${zerionApi}`
        );

        setTopGainers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching top gainers:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Top Gainers</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {topGainers.map((gainer) => (
            <li key={gainer.address}>
              <p>{gainer.name}</p>
              <p>Price: {gainer.price}</p>
              <p>Change: {gainer.change}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopGainers;
