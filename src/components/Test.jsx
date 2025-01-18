import React, { useState, useEffect } from "react";

const Test = () => {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  const fetchDoctors = async (latitude, longitude) => {
    setLoading(true);
    const apikey = `AlzaSyKm7tR7Xo5eEC-aPVj7mjfnVMZmGsnZt8Z`;
    const radius = 5000;
    const type = `doctor`;

    try {
      const response = await fetch(
        `https://maps.gomaps.pro/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${apikey}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data from the server.");
      }

      const data = await response.json();
      setDoctors(data.results || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
        fetchDoctors(latitude, longitude);
      },
      (err) => {
        setError(
          "Failed to get your location. Please enable location services."
        );
      }
    );
  };

  useEffect(() => {
    getUserLocation();
  }, []);
  if (loading) return <p className="text-center">Searching nearby....</p>;
  return (
    <>
      <div className="p-6 bg-gray-200">
        <h1 className="text-3xl font-semibold text-center text-blue-500 mb-6 ">
          Nearby Doctors & Hospitals
        </h1>

        {loading && <p className="text-center text-gray-200">Loading...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        {!userLocation && !loading && !error && (
          <p className="text-center">
            Please enable location access to see nearby doctors.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md hover:shadow-lg transition bg-white"
            >
              <img
                src={
                  doctor.photos
                    ? `/images/doctor-card.png`
                    : doctor.icon
                }
                alt={doctor.name}
                className="w-full h-48 object-contain rounded-lg"
              />
              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                {doctor.name.slice(0, 45) || "No Name Available"}
              </h2>
              <p className="text-gray-800 ">
                Address: {doctor.vicinity || "No Address Available"}
              </p>
              <p className="text-gray-800">
                Rating: {doctor.rating || "N/A"} (
                {doctor.user_ratings_total || 0} reviews)
              </p>
              <p className="text-gray-800">
                {doctor.opening_hours?.open_now
                  ? "Currently Open"
                  : "Currently Closed"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Test;
