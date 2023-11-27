import React, { useState, useEffect } from "react";

const MapWithLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);

            // Send latitude and longitude to your backend
            sendLocationToBackend(position.coords.latitude, position.coords.longitude);
          });
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      } catch (error) {
        console.error("Error fetching location:", error.message);
      }
    };

    fetchLocation();
  }, []);

  const sendLocationToBackend = async (lat, lon) => {
    try {
      const response = await fetch(`https://itekton.onrender.com/vehicles/${userid}/location/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ latitude: lat, longitude: lon }),
      });

      if (response.ok) {
        console.log("Location sent to backend successfully");
      } else {
        const errorData = await response.json();
        console.error("Error sending location to backend:", errorData.message);
      }
    } catch (error) {
      console.error("Error sending location to backend:", error.message);
    }
  };

  return (
    <div className="w-full border-2 h-60 rounded">
      {latitude && longitude ? (
        <iframe
          title="Location Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.8646256490914!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2f256f59a5%3A0xe557622f2030a948!2sGoogle%20Plex!5e0!3m2!1sen!2sus!4v1632328547239!5m2!1sen!2sus`}
          allowFullScreen=""
        ></iframe>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

export default MapWithLocation;
