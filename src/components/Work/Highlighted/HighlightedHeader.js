import React, { Fragment } from "react";

const HighlightedHeader = () => {
  return (
    <Fragment>
      <div className="text-secondary otherApps">
        <hr />
        <h3
          className="work-subtitle black specialFont bold textShadow"
          style={{ fontSize: "1.1rem" }}
        >
          I develop software every day. Below is a shortened and adapted list of
          my projects/prototypes:{" "}
        </h3>
        <hr />
      </div>

      <p className="header-note">
        <span className="custom-text" aria-label="dash">
          <b className="note">
            <i>Note</i>➖{" "}
          </b>
        </span>
        Some apps may take longer to load simply because they were deployed
        using a <b className="dark"> "FREE TIER"</b> account.{" "}
        <br className="header-break" />
        Thank you for understanding.{" "}
        <b className="dark">
          I'm in the process of finalizing multiple projects, so more apps will
          be added soon.
        </b>
      </p>
    </Fragment>
  );
};

export default HighlightedHeader;
