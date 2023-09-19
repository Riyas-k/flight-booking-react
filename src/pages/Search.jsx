import React from "react";

const FlightSearch = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">
        Search for favorite Flights
      </h1>
      <form className="w-full max-w-md bg-white rounded-lg p-6 shadow-md">
        <div className="mb-6">
          <label htmlFor="departureCity" className="block mb-2 text-sm font-medium text-gray-900">
            Departure City
          </label>
          <input
            type="text"
            id="departureCity"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Departure City"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="destinationCity" className="block mb-2 text-sm font-medium text-gray-900">
            Destination City
          </label>
          <input
            type="text"
            id="destinationCity"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Destination City"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="departureDate" className="block mb-2 text-sm font-medium text-gray-900">
            Departure Date
          </label>
          <input
            type="date"
            id="departureDate"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="passengerCount" className="block mb-2 text-sm font-medium text-gray-900">
            Number of Passengers
          </label>
          <input
            type="number"
            id="passengerCount"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Number of Passengers"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Search Flight
          </button>
        </div>
      </form>
    </div>
  );
};

export default FlightSearch;
