import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "./Blog_Init";

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

  return (
    <div>
      <main id="blog">
        <h1 className="lg-heading textShadow">
          <span className="heading-about">My</span>
          <i className="dark-heading gold-headings"> Blog</i>
        </h1>
        <section className="">
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
                      <h3 className="custom-text">{post.title}</h3>
                    </span>
                  </Link>
                </article>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}
