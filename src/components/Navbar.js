import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar fixed-top navbar-expand-lg text-light bg-dark"
          
        >
          <div className="container-fluid">
            <Link className="navbar-brand" style={{color:"white"}} to="/">
              News Reader
            </Link>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" style={{color:"white"}} aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active" style={{color:"white"}}
                    aria-current="page"
                    to="/business"
                  >
                    Business{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active" style={{color:"white"}}
                    aria-current="page"
                    to="/Entertainment"
                  >
                    Entertainment
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active" style={{color:"white"}}
                    aria-current="page"
                    to="/Health"
                  >
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active" style={{color:"white"}}
                    aria-current="page"
                    to="/Science"
                  >
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active" style={{color:"white"}}
                    aria-current="page"
                    to="/Sports"
                  >
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active" style={{color:"white"}}
                    aria-current="page"
                    to="/Technology"
                  >
                    Technology
                  </Link>
                </li>
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Country
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        India
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        US
                      </a>
                    </li>
                   <li>
                      <a className="dropdown-item" href="#">
                       Australia
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        UK
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        China
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        France
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Germany
                      </a>
                      <li>
                      <a className="dropdown-item" href="#">
                        Pakistan
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        UAE
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Canada
                      </a>
                    </li>
                    
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
