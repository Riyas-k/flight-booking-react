import React, { useState, useEffect } from "react";

const ProductCard = ({ planeName, bookingPrice }) => {
  const [flightImage, setFlightImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const randomImageUrl = "https://source.unsplash.com/1600x900/?airplane";

  useEffect(() => {
    fetch(randomImageUrl)
      .then((response) => {
        if (response.ok) {
          setFlightImage(randomImageUrl);
        } else {
          setFlightImage("https://via.placeholder.com/1600x900");
        }
      })
      .catch((error) => {
        console.error("Error fetching flight image:", error);
        setFlightImage("https://via.placeholder.com/1600x900");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <a href="#" className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        {isLoading ? (
          <div className="h-full w-full flex items-center justify-center">
            Loading...
          </div>
        ) : (
          <img
            src={flightImage}
            alt={planeName}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        )}
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{planeName}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">Price: ${bookingPrice}</p>
    </a>
  );
};

const Home = () => {
  const productsPerPage = 4; // Number of products per page
  const [currentPage, setCurrentPage] = useState(1);
  const products = [
    { planeName: "Airbus A320", bookingPrice: "300" },
    { planeName: "Boeing 737", bookingPrice: "350" },
    { planeName: "Embraer E190", bookingPrice: "280" },
    { planeName: "Airbus A380", bookingPrice: "500" },
    { planeName: "Boeing 787", bookingPrice: "450" },
    { planeName: "Airbus A350", bookingPrice: "400" },
    { planeName: "Boeing 777", bookingPrice: "480" },
    { planeName: "Bombardier CRJ-900", bookingPrice: "320" },
    { planeName: "Bombardier CRJ-900", bookingPrice: "320" },
    // Add more products here
  ];

  // Calculate the range of products to display on the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {currentProducts.map((product, index) => (
            <ProductCard
              key={index}
              planeName={product.planeName}
              bookingPrice={product.bookingPrice}
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 mt-6 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={currentPage === 1}
            className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
              currentPage === 1 ? "pointer-events-none" : ""
            }`}
          >
            Previous
          </button>
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
              <span className="font-medium">{Math.min(endIndex, products.length)}</span> of{" "}
              <span className="font-medium">{products.length}</span> results
            </p>
          </div>
          <button
            onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
              currentPage === totalPages ? "pointer-events-none" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
