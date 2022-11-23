import React from "react";

const SideBar = ({ link, linkAlt, icon, text }) => {
  return (
      <li className="xo">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={linkAlt}
          className="contact-container sidebar-list"
        >
          <i className={icon}></i>
          {text}
        </a>
      </li>
  );
};

export default SideBar;
