import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "./Blog_Init";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main id="single-post" className="white-theme">
      <Link to="/post">
        <i
          id="arrow-left-dark"
          className="fas fa-arrow-left fa-2x redShaddow arrow-left"
        >
          <span className="back-btn-dark"> Go back</span>
        </i>
      </Link>
      <article className="">
        <div className="">
          <h1 className="blog-title work-heading-segments redShaddow">
            {singlePost.title}
          </h1>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="blog-images center-image single-post-image"
            id="single-post-image-dark"
          />
        </div>
        <div className="">
          <BlockContent
            blocks={singlePost.body}
            projectId="beq9vr6s"
            dataset="production"
          />
        </div>
      </article>

      <div className="">
        <img
          src={urlFor(singlePost.authorImage).url()}
          alt={singlePost.name}
          className="blog-author-image"
        />
        <p className="blog-author-name-dark">{singlePost.name}</p>
      </div>
    </main>
  );
}
