import React, { Fragment } from "react";

const darkMode = localStorage.getItem("dark");

const HighlightedApp = ({ mainLink, github }) => {
  return (
    <Fragment>
      <a
        href={mainLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-light"
      >
        <i className="fas fa-eye" /> Live preview
      </a>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className={
          darkMode === "true" ? "btn-dark btn-dark__reverse" : "btn-dark"
        }
      >
        <i className="fab fa-github" /> Github repo
      </a>
    </Fragment>
  );
};

export default HighlightedApp;
