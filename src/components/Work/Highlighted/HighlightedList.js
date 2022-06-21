import React, { Fragment } from "react";
import Local_Setup from "../../../documents/Local_Setup.pdf";

const HighlightedList = ({ openVideo }) => {
  return (
    <Fragment>
      <ul className="highlightedList">
        <li>
          <b className="text-secondary textShadow">
            Some of the technologies used in this app include:
          </b>
        </li>
        <hr />
        <li>
          <b>HTML5</b> & <b>CSS3</b> <i>(on a more advance level)</i>
        </li>
        <li>
          <b>ReactJS</b> <i>(with many related NPM packages)</i>
        </li>
        <li>
          <b>Redux</b> (<i>for 90% of the state management)</i>
        </li>
        <li>
          <b>NodeJS</b>
          <i>
            (with <b>SailsJS</b> in this particular project)
          </i>
        </li>
        <li>
          <b>MongoDB</b> <i>(for monthly local storage)</i>
        </li>
        <li>
          <b>Bootstrap</b> <i>(but mostly pure CSS3)</i>
        </li>
        <li>
          Google OAuth2, Drive & Spreadsheets APIs <br />
          <i>(for OAuth, sync, and remote storage)</i>
        </li>
        <li>
          jQuery & Lodash <i>(as helper libraries)</i>
        </li>
        <li>... and so much more</li>
        <hr />
        <div className="highlightedList__icons">
          <li style={{ listStyleType: "none", paddingBottom: ".5rem" }}>
            <a
              href="#!"
              id="video"
              className="icons textShadow"
              onClick={openVideo}
              aria-label="Open the video demonstration"
            >
              <i className="fab fa-youtube fa-2x" />
              Watch Video Preview
            </a>
          </li>

          <li style={{ listStyleType: "none" }}>
            <a
              href={Local_Setup}
              className="icons textShadow"
              download="Local_Setup"
              aria-label="Download the instructions"
            >
              <i className="fas fa-download fa-2x" /> Download Instructions
            </a>
          </li>
        </div>
      </ul>
    </Fragment>
  );
};

export default HighlightedList;
