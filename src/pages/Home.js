import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Vintage Kicks</h1>
          <p>Discover the finest collection of classic & retro sneakers.</p>
          <Link to="/products" className="btn btn-primary">
            View Collection
          </Link>
        </div>
      </header>

      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to="/products" className="nav-item">Shop</Link>
        <Link to="/orders" className="nav-item">My Orders</Link>
        <Link to="/login" className="nav-item">Login</Link>
        <Link to="/register" className="nav-item">Register</Link>
      </nav>

      {/* Featured Section */}
      <section className="featured">
        <h2>Featured Vintage Sneakers</h2>
        <div className="featured-grid">
          <div className="shoe-card">
            <img src="/images/shoe1.jpg" alt="Vintage Shoe 1" />
            <p>Adidas samba</p>
          </div>
          <div className="shoe-card">
            <img src="/images/shoe2.jpg" alt="Vintage Shoe 2" />
            <p>vans</p>
          </div>
          <div className="shoe-card">
            <img src="/images/shoe3.jpg" alt="Vintage Shoe 3" />
            <p>Converse</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Vintage Kicks. All rights reserved.</p>
      </footer>

      {/* CSS Styles */}
      <style>
        {`
          .home-container {
            text-align: center;
            font-family: Arial, sans-serif;
          }
          .hero {
            background: url('/images/hero-bg.jpg') center/cover no-repeat;
            color: white;
            padding: 100px 20px;
          }
          .hero-content h1 {
            font-size: 48px;
            margin-bottom: 10px;
          }
          .hero-content p {
            font-size: 18px;
            margin-bottom: 20px;
          }
          .btn {
            background-color: #8B4513;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
          }
          .btn:hover {
            background-color: #A0522D;
          }
          .nav-links {
            margin: 20px 0;
          }
          .nav-item {
            margin: 0 15px;
            text-decoration: none;
            color: #333;
            font-weight: bold;
          }
          .featured {
            padding: 40px 20px;
            background-color: #f8f8f8;
          }
          .featured-grid {
            display: flex;
            justify-content: center;
            gap: 20px;
          }
          .shoe-card {
            background: white;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            width: 200px;
          }
          .shoe-card img {
            width: 100%;
            border-radius: 5px;
          }
          .footer {
            padding: 10px;
            background: #333;
            color: white;
          }
        `}
      </style>
    </div>
  );
}

export default Home;