import React from "react";
import { Link } from "react-router-dom"; // Tambahkan ini

const logout = () => {
  // Menghapus token dari localStorage
  localStorage.removeItem("token");
  // Mengarahkan pengguna kembali ke halaman login atau halaman utama
  window.location.href = "/login"; // Ganti '/login' dengan path halaman login Anda
};

const Navbar = () => (
  <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    {/* Your original navbar code goes here */}
    <div className="container px-4 px-lg-5">
      <a className="navbar-brand" href="#!">
        Online Shop
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#!">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              About
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#" onClick={logout}>
              Logout
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#!"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop
            </a>
          </li>
        </ul>
        <form className="d-flex">
          <button className="btn btn-outline-dark" type="submit">
            <i className="bi-cart-fill me-1" />
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              0
            </span>
          </button>
        </form>
      </div>
    </div>
  </nav>
);

export default Navbar;
