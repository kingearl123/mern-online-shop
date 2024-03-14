import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";

// Main Homepage Component
const Homepage = () => {
  // Mock products array
  const products = [
    { id: 1, name: "Fancy Product", price: "$40.00 - $80.00" },
    { id: 2, name: "Sale Item", price: "$25.00" },
    // Add more products as needed
  ];

  return (
    <div>
      <Navbar />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <h1 className="text-center">List Product</h1>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
