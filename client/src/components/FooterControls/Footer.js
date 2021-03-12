import React from "react";
import "./Footer.css";
import home from "../../imgs/home.png";
import { NavLink } from "react-router-dom";

function Footer() {
 

  return (
    <div>
      <footer className="footer">
        <ul className="justify-content-center nav nav-tabs">
          <li className="nav-item">
            <NavLink to="/stats" activeClassName="blackBack" >
              <a
                // style={{ borderLeft: "2px white solid" }}
                className="nav-link"
                href="#"
              >
                <svg
                  width="3em"
                  height="4em"
                  viewBox="0 0 16 16"
                  className="bi bi-bar-chart-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="4" height="5" x="1" y="10" rx="1" />
                  <rect width="4" height="9" x="6" y="6" rx="1" />
                  <rect width="4" height="14" x="11" y="1" rx="1" />
                </svg>
              </a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" activeClassName="blackBack">
            <a
              // style={{
              //   // borderRight: "2px white solid",
              //   // borderLeft: "2px white solid",
              // }}
              className="nav-link"
              href="/"
            >
              <img className="homeIcon" src={home} alt="" />
            </a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" activeClassName="blackBack">
            <a
              // style={{ borderRight: "2px white solid" }}
              className="nav-link"
              href="#"
              
              // onClick={handleClick}
            >
              <svg
                width="3em"
                height="4em"
                viewBox="0 0 16 16"
                class="bi bi-person-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path
                  fill-rule="evenodd"
                  d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                />
              </svg>
            </a>
            </NavLink>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
