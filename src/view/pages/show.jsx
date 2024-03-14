import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";

const Show = () => {
  const [products, setProducts] = useState([]);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/products/uploads/"
        );
        console.log(response.data); // Log the response
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container pt-5">
      <h1 className="text-center">Data Product</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th className="text-center" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td className="img-preview">
                {product.image ? (
                  <img
                    src={`http://localhost:8000/${product.image}`}
                    alt={product.name}
                    style={{ width: "50px", height: "auto" }}
                  />
                ) : (
                  <p className="image-text">
                    Image Preview <br /> Suggested Size 300x300
                  </p>
                )}
              </td>
              <td>
                <Link to={`/edit/${product._id}`} className="btn btn-warning">
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to="/input" className="btn btn-success">
        Tambah Data
      </Link>
    </div>
  );
};

export default Show;