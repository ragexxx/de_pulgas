import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row amber darken-1">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Log out
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div className="nav-wrapper amber darken-1">
        <ul className="flex-row left">
          <li className="mx-1">
            <Link to="/signup">
              Sign Up
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
        </div>
      );
    }
  }

  return (
    <header className="flex-row px-1 orange darken-1">
      <h1>
        <Link to="/">
          <span aria-label="shopping bug"></span>
          🛒🐛 DePulgas
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
