import React, { Fragment } from "react";

import webp_Portrait from "../assets/img/portrait.webp";
import jpg_Portrait from "../assets/backup/portrait.jpg";

import Toggle from "./darkMode/ToggleContainer";
import { useTheme } from "./darkMode/useTheme";
import { Wrapper } from "./darkMode/Wrapper";
import Icon from "../components/helper/IconComponent";

import HTML5 from "../assets/icons/html.png";
import CSS3 from "../assets/icons/css.png";
import _react from "../assets/icons/react.png";
import redux from "../assets/icons/redux.png";
import _js from "../assets/icons/js2.png";
import mongo from "../assets/icons/mongo.png";
import bootstrap from "../assets/icons/bootstrap.png";
import graph from "../assets/icons/graphql.png";
import express from "../assets/icons/express.png";
import git from "../assets/icons/git.png";
import webpack from "../assets/icons/webpack.png";
import gulp from "../assets/icons/gulp.png";
import code from "../assets/icons/vs_code.png";
import lodash from "../assets/icons/lodash.png";
import babel1 from "../assets/icons/babel1.png";
import postman from "../assets/icons/postman.png";
import jest from "../assets/icons/jest.png";
import handlebars from "../assets/icons/handlebars.png";
import python from "../assets/icons/python.png";
import java3 from "../assets/icons/java3.png";
import firebase from "../assets/icons/firebase.png";
import socket from "../assets/icons/socket.jpg";
import node from "../assets/icons/node.png";

const About = () => {
  const themeState = useTheme();
  const darkMode = localStorage.getItem("dark");

  return (
    <Fragment>
      <Wrapper>
        <main id="about">
          <Toggle toggleTheme={themeState} theme={themeState.dark}></Toggle>
          <h1 className="lg-heading textShadow">
            <span className={darkMode === "true" ? "white" : "heading-about"}>
              About
            </span>
            <i className="text-secondary textShadow"> Me</i>
          </h1>
          <h2 className="sm-heading">
            A snapshot of what you can expect from me:
          </h2>
          <div className="about-info">
            <picture>
              {/* If the browser supports WebP format use that*/}
              <source srcSet={webp_Portrait} type="image/webp" />
              {/* If NOT use the regular JPG foramt insted*/}
              <source srcSet={jpg_Portrait} type="image/jpeg" />
              {/* If the browser doesn't support the '<picture' tag use regular '<img> instead  */}
              <img src={jpg_Portrait} alt="Dzenis H." className="bio-image" />
            </picture>

            <div className="bio">
              <h3 className="text-secondary textShadow">Intro:</h3>
              <small className="about-parts">
                I’m a go-getter, always up-to-date with the latest tech, web
                protocols, tools, and software development standards.
                Programming is my passion. My ultimate goal is to become a
                Master of coding. My approach is crafted from self-discipline,
                continuous learning, and monk-like patience. I am a highly
                driven individual.
              </small>
              <hr />
              <p className="text-secondary textShadow">
                My philosophy is simple:
              </p>
              <small>
                <strong className="textShadow">
                  The level of your success can be found in your daily routine.
                </strong>
                <hr className="marginBottom" />
                Just like <em className="diff-text">Aristotle</em> once said:
                <blockquote
                  className={
                    darkMode === "true"
                      ? "sunflower sunflower__reverse"
                      : "sunflower"
                  }
                >
                  We are what we repeatedly do. Excellence, then, is not an act,
                  but a habit.
                </blockquote>
                <p className="about-parts">
                  I am not simply about self-development but rather, rising as
                  part of a team. My credo is{" "}
                  <span className="diff-text">“Let's win together!”</span> I am
                  not solely about self-development but rising as part of a
                  team. My credo is “Let’s win together!” If something is
                  holding us back, adaptation may be needed, such as a different
                  approach, new habit, or the need to think outside our purview.
                  I live and breathe positivity that is all around me. I enjoy
                  collaborating, sharing and receiving knowledge, and developing
                  strong teamwork environments.
                </p>
                <hr />
                In the words of the great
                <em className="diff-text"> Howard Hughes:</em>
                <blockquote
                  className={
                    darkMode === "true"
                      ? "sunflower sunflower__reverse"
                      : "sunflower"
                  }
                >
                  Don't tell me I can't do it; Don't tell me it can't be done.
                </blockquote>
                <p
                  className="text-secondary textShadow"
                  style={{ fontSize: "1.25rem" }}
                >
                  My personality may slightly differ:
                </p>
                <p className="about-parts">
                  My personality may slightly differ: I am an independent
                  thinker and carry my own weight, either alone or part of a
                  team. I am purely solution orientated and when faced with a
                  problem or the ‘impossible’, I go into overdrive and attempt
                  to find an adequate solution. When individuality is scarce,
                  teamwork prevails. The best results are achieved through
                  focus, composure, and calmness - creating true clarity. Great
                  ideas stem from agile, efficient, creative, collaborative work
                  fueled by curiosity and exploration. I can work independently,
                  however, I’m a true believer in the phrase:{" "}
                  <span className="teamwork">
                    <b className="text-secondary textShadow">
                      "Teamwork makes the dream work"
                    </b>
                  </span>
                </p>
              </small>
              <p
                className="text-secondary textShadow"
                style={{ fontSize: "1.25rem" }}
              >
                My thinking process:
              </p>
              <blockquote
                className={
                  darkMode === "true"
                    ? "sunflower sunflower__reverse"
                    : "sunflower"
                }
              >
                “The first principle is that you must not fool yourself and you
                are the easiest person to fool.”{" "}
                <span role="img" aria-label="dash">
                  {" "}
                  ➖
                </span>{" "}
                <em className="black marginBottom">Richard Feynman</em>
              </blockquote>
              <small className="about-parts">
                My thinking process is based on a problem-solving technique
                called “reasoning from first principles” or just first
                principles. It requires you to break down a complex problem into
                its most basic, foundational elements. The idea: to ground
                yourself in the foundational truths and build up from there. To
                follow this principle is like becoming an endlessly curious
                child again! Question anything and everything. Aristotle defined
                a first principle as, “the first basis from which a thing is
                known.” In short, just ask why regarding everything, everytime.
              </small>{" "}
            </div>

            {/* ********************************************************** 
                TECH-STACK PART -> TO-DO: ADD ICONS AND ANIMATIONS */}

            <div className="job job-1 textShadow animate__animated animate__backInLeft animate__delay-2s">
              <h3 className="text-secondary specialFont bold">
                <span className="diff-text bold">Tech stack:</span>
              </h3>
              <h5 className={darkMode ? "black" : "white"}>
                Technologies that I'm familiar with, practice and use daily:
              </h5>
              <ul className="firstStack about__list">
                <li className={darkMode === "true" ? "black" : "white"}>
                  <Icon name={HTML5} /> <b className="text-secondary">HTML5 </b>
                  <br />
                  <i>[w/ the newest standards & approaches] </i>
                </li>

                <li className={darkMode === "true" ? "black" : "white"}>
                  <Icon name={CSS3} /> <b className="text-secondary">CSS 3 </b>{" "}
                  <br />
                  <i>[Grid, Flexbox, Animations, Sass]</i>
                </li>

                <li className={darkMode === "true" ? "black" : "white"}>
                  <Icon name={_js} />{" "}
                  <b className="text-secondary">JavaScript </b>
                  <br />
                  <i>
                    [proficient with vanilla <b>ES6</b> and above]
                  </i>
                </li>

                <li className={darkMode === "true" ? "black" : "white"}>
                  <Icon name={_react} />{" "}
                  <b className="text-secondary">React 17+ </b>
                  <br />
                  <i>[familiar with its entire ecosystem]</i>
                </li>

                <li className={darkMode === "true" ? "black" : "white"}>
                  <Icon name={redux} /> <b className="text-secondary">Redux </b>
                  <br />
                  <i>[my essential tool for state management]</i>
                </li>

                <li className={darkMode === "true" ? "black" : "white"}>
                  <Icon name={node} />{" "}
                  <b className="text-secondary">NodeJS </b>
                  <br />
                  <i>
                    [mostly with <b>Express</b> & <b>SailsJS </b>too]
                  </i>
                  <br />
                </li>

                <li className={darkMode === "true" ? "black" : "white"}>
                  <Icon name={mongo} />{" "}
                  <b className="text-secondary">MongoDB </b>
                  <br />
                  <i>
                    [natively or/ and with <b>Mongoose</b>]
                  </i>
                </li>

                <li className={darkMode === "true" ? "black" : "white"}>
                  <Icon name={bootstrap} />{" "}
                  <b className="text-secondary">Bootstrap 4 </b>
                  <br />
                  <i>
                    [great with <b>Materialize CSS</b> too]
                  </i>
                </li>

                <li className={darkMode === "true" ? "black" : "white"}>
                  <Icon name={graph} />{" "}
                  <b className="text-secondary">GraphQL </b>
                  <br />
                  <i>[as an alternative to RESTful APIs]</i>
                </li>

                <li className={darkMode === "true" ? "black" : "white"}>
                  <Icon name={firebase} />{" "}
                  <b className="text-secondary">Firebase </b>
                  <br />
                  <i>[Firestore, Hosting, Realtime DB, etc.]</i>
                </li>

                <li className={darkMode === "true" ? "black" : "white"}>
                  <Icon name={socket} />{" "}
                  <b className="text-secondary">Socket.IO </b>
                  <br />
                  <i>[familiar with websocket's protocol]</i>
                </li>

                <br />
              </ul>
            </div>

            {/* Additional tech */}
            <div className="job job-2 textShadow animate__animated animate__backInUp animate__delay-2s">
              <h3 className="text-secondary specialFont bold">
                <span className="diff-text bold">Additional utilities:</span>
              </h3>
              <h5 className={darkMode ? "black" : "white"}>
                Some of additional tools and libraries that I use regularly:
              </h5>
              <ul className="secondStack about__list">
                <li className={darkMode === "true" ? "black" : "white"}>
                  <br />
                  <img
                    style={{ cursor: "pointer" }}
                    src={git}
                    alt={git}
                    width="24"
                    height="24"
                  />{" "}
                  <b className="text-secondary">Git </b>
                  <i>[as my version control system]</i>
                </li>

                <li className={darkMode === "true" ? "black" : "white"}>
                  <img
                    style={{ cursor: "pointer" }}
                    src={webpack}
                    alt={webpack}
                    width="24"
                    height="24"
                  />{" "}
                  <b className="text-secondary">Webpack </b>
                  <i>[for module bundling]</i>
                </li>

                <li className={darkMode === "true" ? "black" : "white"}>
                  <Icon name={gulp} />
                  <b className="text-secondary">Gulp </b>
                  <i>[when a task runner is required]</i>
                </li>

                <li className={darkMode === "true" ? "black" : "white"}>
                  <Icon name={babel1} />
                  <b className="text-secondary">Babel </b>
                  <i>[for backward compatibility of ES6+]</i>
                </li>

                <li className={darkMode === "true" ? "black" : "white"}>
                  ¸
                  <Icon name={postman} />
                  {"  "}
                  <b className="text-secondary">Postman </b>
                  <i>[API development testing tool]</i>
                </li>

                <li
                  style={{ marginTop: ".2rem" }}
                  className={darkMode === "true" ? "black" : "white"}
                >
                  <Icon name={lodash} height="17px" width="20px" />
                  {"  "}
                  <b className="text-secondary">Lodash </b>
                  <i>[often required as my helper library]</i>
                </li>

                <li className={darkMode === "true" ? "black" : "white"}>
                  <Icon name={jest} />
                  <b className="text-secondary">Jest, Enzyme, Mocha </b>
                  <i>[as my testing utilities]</i>
                </li>

                <li className={darkMode === "true" ? "black" : "white"}>
                  <Icon name={handlebars} />{" "}
                  <b className="text-secondary">EJS/ HBS </b>
                  <i>[when all focus is on the backend]</i>
                </li>
              </ul>
              <hr />

              <h4 className="marginTop">
                <b className="diff-text">Deployment:</b>{" "}
                <span className={darkMode === "true" ? "black" : "white"}>
                  I use various platforms depending on the type and the size of
                  the project:
                </span>
                <span className="diff-text">
                  {" "}
                  Heroku, Firebase, Netlify, App Engine, AWS, Google Cloud.
                </span>
              </h4>
              <h4
                className={
                  darkMode === "true" ? "black marginTop" : "white marginTop"
                }
              >
                As the skills and experience of a developer grow, so does the
                list of tools used. It comes to a point where it is hard to list
                everything, but to me, the ones listed above are the most
                relevant.
              </h4>
            </div>

            {/* Additional Info:
             */}
            <div className="job job-3 textShadow animate__animated animate__backInUp animate__delay-2s">
              {" "}
              <h3 className="text-secondary specialFont bold">
                Additional Info:
              </h3>
              <ul className="thirdStack about__list">
                <li>
                  <span className={darkMode === "true" ? "black" : "white"}>
                    {" "}
                    The technology stack that I'm currently most focused on and
                    exclusively work with is:
                  </span>
                  <b className="text-secondary textShadow">
                    {" "}
                    <br />
                    <span className="the_mern_stack text-secondary textShadow">
                      The M E R N stack
                    </span>
                    <span
                      style={{ fontSize: ".85rem" }}
                      className="diff-text"
                      aria-label="dash"
                      role="img"
                      id="mern"
                    ></span>{" "}
                    <br />
                    <p className="mern-list">
                      <span className="mr">MongoDB</span>
                      <Icon name={mongo} height="20" width="20" />
                      <span className="mr ml">ExpressJS</span>
                      <Icon name={express} height="18" width="18" />
                    </p>
                    <p className="mern-list">
                      <span className="mr ml">ReactJS</span>
                      <Icon name={_react} height="20" width="20" />
                      <span className="mr ml">NodeJS</span>
                      <Icon name={node} height="20" width="20" />
                    </p>
                  </b>
                </li>
                <li className={darkMode === "true" ? "black" : "white"}>
                  <br />A programming language that I'm familiar with, but
                  haven't used for a very long time:
                  <b className="text-secondary"> Java.</b> <Icon name={java3} />
                </li>
                <li className={darkMode === "true" ? "black" : "white"}>
                  A programming language that I plan to learn and would like to
                  work with in the future:{" "}
                  <b className="text-secondary"> Python.</b>{" "}
                  <Icon name={python} />
                </li>
                <li className={darkMode === "true" ? "black" : "white"}>
                  <br />
                  <span className="editor">
                    <Icon name={code} width="30" height="30" />

                    <span style={{ marginLeft: ".33rem" }}>
                      {" "}
                      My favourite code editor is VS Code.{" "}
                    </span>
                    {"  "}
                  </span>
                </li>
              </ul>
              <hr />
              <h4 className="marginTop diff-text">
                When I'm not coding, learning new programming skills, or
                advancing the existing ones, I'm doing one of the following:
              </h4>
              <ul>
                <li className={darkMode === "true" ? "black" : "white"}>
                  <i>Practising meditation & healthy lifestyle.</i>
                </li>
                <li className={darkMode === "true" ? "black" : "white"}>
                  <i>Extensively listening to audiobooks.</i>
                </li>
                <li className={darkMode === "true" ? "black" : "white"}>
                  <i>Reading articles about A.I.</i>
                </li>
                <li className={darkMode === "true" ? "black" : "white"}>
                  <i>Spending quality family time.</i>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </Wrapper>
    </Fragment>
  );
};

export default About;
