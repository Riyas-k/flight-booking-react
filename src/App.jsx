import { useState } from "react";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Book from "./pages/Book.jsx";
import FlightSearch from "./pages/Search.jsx";

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/book" element={<Book />}></Route>
        <Route path="/search" element={<FlightSearch />}></Route>
      </Routes>
    </>
  );
}

export default App;
