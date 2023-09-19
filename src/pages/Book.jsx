import React, { useState, useEffect } from "react";

const Book = () => {
  const [flightImage, setFlightImage] = useState("");
  const randomImageUrl = "https://source.unsplash.com/1600x900/?airplane";

  useEffect(() => {
    // Fetch a random flight image from an API or use a placeholder
    fetch(randomImageUrl)
      .then((response) => {
        if (response.ok) {
          setFlightImage(randomImageUrl);
        } else {
          // Use a placeholder image if the API request fails
          setFlightImage("https://via.placeholder.com/1600x900");
        }
      })
      .catch((error) => {
        console.error("Error fetching flight image:", error);
        // Use a placeholder image on error
        setFlightImage("https://via.placeholder.com/1600x900");
      });
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: `url(${flightImage})` }}
    >
      <h1 className="text-3xl font-semibold text-white mb-6">
        Book Your Favorite Flight
      </h1>
      <form className="w-full max-w-md bg-white bg-opacity-80 backdrop-blur-lg rounded-lg p-6">
        <div className="mb-6">
          <label
            htmlFor="departureCity"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Departure City
          </label>
          <input
            type="text"
            id="departureCity"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter Departure City"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="destinationCity"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Destination City
          </label>
          <input
            type="text"
            id="destinationCity"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter Destination City"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="departureDate"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Departure Date
          </label>
          <input
            type="date"
            id="departureDate"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="passengerCount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Number of Passengers
          </label>
          <input
            type="number"
            id="passengerCount"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter Number of Passengers"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Book Flight
          </button>
        </div>
      </form>
    </div>
  );
};

export default Book;
