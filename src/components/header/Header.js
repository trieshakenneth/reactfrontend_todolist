import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isAuthenticated, setIsAuthenticated }) {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand">PriorityPal</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ fontWeight: 'bold' }}>Home</Link>
              </li>
              {isAuthenticated && (
                <>
                  <li className="nav-item">
                    <Link to="/todo" className="nav-link">View Task</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/add" className="nav-link">Add Task</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signout" className="nav-link">Signout</Link>
                  </li>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <li className="nav-item">
                    <Link to="/signin" className="nav-link" style={{ color: 'orange' }}>Signin</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link" style={{ color: 'red' }}>Signup</Link>
                  </li>
                </>
              )}
             
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
