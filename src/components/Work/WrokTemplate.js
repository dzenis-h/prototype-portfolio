import React from "react";

const darkMode = localStorage.getItem("dark");

const WrokTemplate = ({ mainLink, github, name, description }) => {
  return (
    <>
      <a
        href={mainLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-light"
        aria-label="Link for the deployed app"
      >
        <i className="fas fa-eye" /> Live preview
      </a>
      <a
        href={github}
        target="_blank"
        className="btn-dark"
        rel="noopener noreferrer"
        aria-label="Open gitHub repo for this program"
      >
        <i className="fab fa-github" /> Github repo
      </a>
      <p
        role="img"
        aria-label="developers"
        style={{ textAlign: "center", letterSpacing: "4px" }}
      >
        <span className={darkMode === "true" ? "bold-dark" : "bold-light"}>
          <b>{name}</b>
        </span>
        <br />
        {description}
      </p>
    </>
  );
};

export default WrokTemplate;
