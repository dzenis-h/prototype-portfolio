import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "./Blog_Init";

import Toggle from "../components/darkMode/ToggleContainer";
import { useTheme } from "../components/darkMode/useTheme";
import { Wrapper } from "../components/darkMode/Wrapper";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  const themeState = useTheme();
  const darkMode = localStorage.getItem("dark");

  return (
    <>
      <Wrapper>
        <main
          id="blog"
          className={darkMode === "true" ? "dark-theme" : "white-theme"}
        >
          <Toggle toggleTheme={themeState} theme={themeState.dark}></Toggle>{" "}
          <h1 className="lg-heading textShadow">
            <span
              className={
                darkMode === "true" ? "white heading-about" : " heading-about"
              }
            >
              My
            </span>
            <i
              className={
                darkMode === "true"
                  ? "text-secondary textShadow"
                  : "about-headline custom-text"
              }
            >
              {" "}
              Blog
            </i>{" "}
          </h1>
          <section className="grid-posts">
            <div className="blog-flex">
              {postData &&
                postData.map((post, index) => (
                  <article className="blog-article">
                    <Link
                      to={"/post/" + post.slug.current}
                      key={post.slug.current}
                    >
                      <span className="blog-list" key={index}>
                        <img
                          src={post.mainImage.asset.url}
                          alt={post.mainImage.alt}
                          className="blog-author-image"
                        />
                        <h3 className="blog-name">{post.title}</h3>
                      </span>
                    </Link>
                  </article>
                ))}
            </div>
          </section>
        </main>
      </Wrapper>
    </>
  );
}
