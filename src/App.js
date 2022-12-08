import React, { Fragment } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  // Redirect,
} from "react-router-dom";

import Home from "./components/HomeComponent";
import About from "./components/AboutComponent";
import Work from "./components/Work/WorkComponent";
import Contact from "./components/contactForm/ContactComponent";
import Footer from "./components/layout/FooterComponent";
import Menu from "./components/layout/MenuComponent";
import AllPosts from "./posts/Post";
import SinglePost from "./posts/SinglePost";

import "./style/App.css";
import "react-toastify/dist/ReactToastify.css";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config/config";

import { ThemeProvider } from "./components/darkMode/useTheme";

const App = () => {
  // Initialize Firebase
  initializeApp(firebaseConfig);

  return (
    <Fragment>
      <ThemeProvider>
        <Router>
          <Menu />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/work" exact component={Work} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/post" exact component={AllPosts} />
            <Route path="/post/:slug" component={SinglePost} />
            {/* <Redirect to="/" /> */}
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
