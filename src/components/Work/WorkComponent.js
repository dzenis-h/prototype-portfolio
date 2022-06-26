import React, { useEffect, Suspense } from "react";
// import ModalVideo from "react-modal-video";

import WrokTemplate from "./WrokTemplate";

import HighlightedHeader from "./Highlighted/HighlightedHeader";

import Toggle from "../darkMode/ToggleContainer";
import { useTheme } from "../darkMode/useTheme";
import { Wrapper } from "../darkMode/Wrapper";

// import HighlightedApp from "./Highlighted/HighlightedApp";
// import HighlightedDescription from "./Highlighted/HighlightedDescription";
// import HighlightedList from "./Highlighted/HighlightedList";

import {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p9,
  p10,
  p11,
  p12,
  p13,
  // p14,
  p15,
  p16,
  // p17,
  p18,
  p19,
  p20,
  p21,
  p22,
  p23,
  // p24,
  j1,
  j2,
  j3,
  j4,
  j5,
  j6,
  j7,
  j9,
  j10,
  j11,
  j12,
  j13,
  // j14,
  j15,
  j16,
  // j17,
  j18,
  j19,
  j20,
  j21,
  j22,
  j23,
  // j24,
} from "../helper/imageIndex";

const ImageComponent = React.lazy(() => import("../helper/ImageComponent"));

const Work = () => {
  // const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    document.title = "My work"; // making the document title dynamic
  }, []);

  const themeState = useTheme();
  const darkMode = localStorage.getItem("dark");

  return (
    <div>
      <Wrapper>
        <main id="work">
          <Toggle toggleTheme={themeState} theme={themeState.dark}></Toggle>{" "}
          <h1 className="lg-heading textShadow">
            <span className={darkMode === "true" ? "white" : "heading-about"}>
              My
            </span>
            <i className="text-secondary textShadow"> Work</i>
          </h1>
          {/* <ModalVideo
          ratio="21:9"
          channel="youtube"
          isOpen={videoOpen}
          videoId="5pUm2DWUgPM"
          onClose={() => setVideoOpen(false)}
        /> */}
          <HighlightedHeader />
          {/* <div className="highlightedProject">
          <div className="item"> */}
          {/* Removed 3rd party package and implemented React.lazy && Suspense */}
          {/* <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent webp={p1} jpg={j1} title="Mars EMS" />
            </Suspense>

            <HighlightedApp
              mainLink="https://hr-ems.herokuapp.com/index.html"
              github="https://github.com/BiggaHD/Mars-EMS"
            />
          </div>
          <HighlightedDescription />
          <HighlightedList openVideo={() => setVideoOpen(true)} />
        </div> */}
          <div className="projects">
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={p7}
                  jpg={j7}
                  title="It's a full stack app that uses a enormous tech stack -> My little versoion of SO :)"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://dev--spot.herokuapp.com/"
                github="https://github.com/BiggaHD/devSpot"
                name="Dev_Spot"
                description="It's a social network for developers 💻"
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p1} jpg={j1} title="Mars EMS" />
              </Suspense>

              <WrokTemplate
                mainLink="https://hr-ems.herokuapp.com/index.html"
                github="https://github.com/BiggaHD/Mars-EMS"
                name="Mars EMS"
                description="Employee management system for Accounting and HR 📊📉📆"
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p15} jpg={j15} title="Reactive RSS" />
              </Suspense>

              <WrokTemplate
                mainLink="https://reactive-feeds.web.app/"
                github="https://github.com/BiggaHD/Reactive-RSS"
                name="Reactive RSS"
                description="Great way to add, save, edit, delete, follow your RSS feeds 📰"
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p5} jpg={j5} title="miniStories" />
              </Suspense>

              <WrokTemplate
                mainLink="https://mini--stories.herokuapp.com/"
                github="https://github.com/BiggaHD/miniStories"
                name="miniStories"
                description="A mini social network site with many extras 📗"
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={p10}
                  jpg={j10}
                  title="My sesocnd Angular app that tracks your recipes and shopping list as well"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://balkan-recipes.firebaseapp.com/"
                github="https://github.com/BiggaHD/Balkan_Recipe_Book"
                name="Balkan Recipes"
                description="Collect recipes and organize your shopping list 🥗"
              />
            </div>

            {/* <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p17} jpg={j17} title="client-panel" />
              </Suspense>

              <WrokTemplate
                mainLink="https://client-panel-2019.firebaseapp.com/"
                github="https://github.com/BiggaHD/client-panel"
                name="Client Panel"
                description=" Add clients, check/ change their balances, etc. 💶"
              />
            </div> */}

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p22} jpg={j22} title="The MERN Shop" />
              </Suspense>

              <WrokTemplate
                mainLink="https://the-mern-shop.herokuapp.com/"
                github="https://github.com/BiggaHD/MERN_Shop"
                name="The MERN Shop"
                description="eCommerce project built using the MERN stack 💲🖥"
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={p4}
                  jpg={j4}
                  title="A small move from RESTful to GraphQL world"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://spacex-2020.herokuapp.com"
                github="https://github.com/BiggaHD/spaceX-launches"
                name="SpaceX Launcher"
                description="An app that interacts with the official SpaceX API 🚀"
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={p12}
                  jpg={j12}
                  title="It's Calorie tracker that saves your data into LS. It's made with pure vanilla JavaScript using the 'Module Pattern', ES6 features, Materialize CSS and Font Awesome for styling."
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://web-calorie-tracker.firebaseapp.com/"
                github="https://github.com/BiggaHD/Calorie_Tracker"
                name="Calorie Tracker"
                description="Track your calories and save data into LS 🍏"
              />
            </div>

            {/* <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={p14}
                  jpg={j14}
                  title="Create a profile, build the burger you like, order it, enjoy"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://reactive-hamburger.web.app/"
                github="https://github.com/BiggaHD/Reactive-Burger"
                name="Reactive Burger"
                description="Create a profile, build the burger you like, order it, enjoy 🍔"
              />
            </div> */}

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={p11}
                  jpg={j11}
                  title="When I first started using Angular 2+"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://balkan-sport.web.app"
                github="https://github.com/BiggaHD/Balkan-Sports-Store"
                name="Balkan Sports Store"
                description="eCommerce prototype app made with Angular 🏀"
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={p9}
                  jpg={j9}
                  title="This was the time when I switched from Angular to React"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://reactive-tube-2.web.app/"
                github="https://github.com/BiggaHD/Reactive-tube"
                name="Reactive Tube"
                description="React-Redux app that uses YouTube API 🎦"
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p2} jpg={j2} title="Bigga File Uploads" />
              </Suspense>

              <WrokTemplate
                mainLink="https://mongo-share.herokuapp.com/"
                github="https://github.com/BiggaHD/bigga_file_uploads"
                name="Bigga File Uploads"
                description="2 way data transfer of various file types w/ preview 🌀"
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p19} jpg={j19} title="Nexter website" />
              </Suspense>

              <WrokTemplate
                mainLink="https://nexter-homes.web.app"
                github="https://github.com/BiggaHD/nexter"
                name="Nexter website"
                description="A prototype for a real estate agency 🏡"
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={p13}
                  jpg={j13}
                  title="Loan Calculator that will determine your estimated payments for loan amounts, interest rates and terms."
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://web-loan-calculator.firebaseapp.com/"
                github="https://github.com/BiggaHD/Loan-Calculator-2.0"
                name="Loan Calculator 2.0"
                description="Estimated payments for loan amounts, interest rates and terms 📊"
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p18} jpg={j18} title="Example Website" />
              </Suspense>

              <WrokTemplate
                mainLink="https://evolwe-example-site.firebaseapp.com/"
                github="https://github.com/BiggaHD/evolWE"
                name="evolWe 2.0"
                description="A prototype of a landing page made for a client ☮"
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p20} jpg={j20} title="Hotel XO website" />
              </Suspense>

              <WrokTemplate
                mainLink="https://hotel-xo.web.app"
                github="https://github.com/BiggaHD/hotel-xo"
                name="Hotel XO"
                description="A prototype website made for a Hotel 🏨"
              />
            </div>

            {/* <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={p24}
                  jpg={j24}
                  title="Reactive contacts"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://reactive--contacts.herokuapp.com/"
                github="https://github.com/BiggaHD/Reactive-Contacts"
                name="Reactive Contacts"
                description="App that lets you add and manipulate contacts 📞"
              />
            </div> */}

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p3} jpg={j3} title="idea_x" />
              </Suspense>

              <WrokTemplate
                mainLink="https://idea--x.herokuapp.com"
                github="https://github.com/BiggaHD/IDEA_x"
                name="idea_X"
                description="Save ideas for your next coding project 💡"
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p23} jpg={j23} title="hub_finder" />
              </Suspense>

              <WrokTemplate
                mainLink="https://hub-finder.web.app/"
                github="https://github.com/BiggaHD/Hub_Finder"
                name="Hub_Finder"
                description="App that uses the GitHub API to find details about its users 🔎"
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p16} jpg={j16} title="iZEN" />
              </Suspense>

              <WrokTemplate
                mainLink="https://biggahd.github.io/iZEN"
                github="https://github.com/BiggaHD/iZEN"
                name="iZEN"
                description="Nice relaxing sounds & visuals to help you calm down 🧘‍"
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p21} jpg={j21} title="Node Book Shop" />
              </Suspense>

              <WrokTemplate
                mainLink="https://node-book-shop.herokuapp.com"
                github="https://github.com/BiggaHD/node-book-shop-2.0"
                name="Node Book Shop"
                description="A prototype of an online store for selling and buying books 📚🛒"
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p21} jpg={j21} title="Image Search" />
              </Suspense>

              <WrokTemplate
                mainLink="https://node-book-shop.herokuapp.com"
                github="https://github.com/BiggaHD/node-book-shop-2.0"
                name="Node Book Shop"
                description="A prototype of an online store for selling and buying books 📚🛒"
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={p6} jpg={j6} title="reactive_movies" />
              </Suspense>

              <WrokTemplate
                mainLink="https://reactive-movies.firebaseapp.com/"
                github="https://github.com/BiggaHD/rubicon-movies"
                name="Reactive Movie DB"
                description="A fast and beautiful web app that uses the TMDb API 🎬"
              />
            </div>

            {/* ''''''''''''''''''''''''''''' */}
          </div>
        </main>
      </Wrapper>
    </div>
  );
};

export default Work;