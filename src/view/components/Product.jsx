import React from "react";

// Product Card Component
const Product = ({ product }) => (
  <div className="col mb-5">
    <div className="card h-100">
      {/* Your original product card code goes here */}
      <img
        className="card-img-top"
        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="..."
      />
      <div className="card-body p-4">
        <div className="text-center">
          <h5 className="fw-bolder">{product.name}</h5>
          {product.price}
        </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <a className="btn btn-outline-dark mt-auto" href="#!">
            Add to Chart
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Product;
