import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {/* use props : we are passing default Values to the function Components*/}
          {props.title}
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {/* use props */}
                {props.aboutText}
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              {props.search}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

// Type-Checking with the prototype
Navbar.protoTypes = {
  //   title: PropTypes.string, // title must be string
  title: PropTypes.string.isRequired, // it is must to send title as a props bcz you set it required just like in input text required
  aboutText: PropTypes.string, //aboutText Must be string always
};

// default props : this value are going to use when we are not passing any props in app js from Navbar component
Navbar.defaultProps = {
  title: "DefaultTitle", // default title
  aboutText: "DefaultAbout", // default aboutText
  search: "Search", // default aboutText
};
