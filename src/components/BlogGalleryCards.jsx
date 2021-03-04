import React from "react";

function BlogGalleryCards({ blogs }) {
  if (blogs.length > 0) {
    return (
      <>
        <div className="gallery">
          {blogs.map((e) => {
            return (
              <div className="blog-gallery-card">
                <a href={`blog/${e.id}`}>
                  <img src={e.photo_url} alt="root" />
                  <div className="gallery-card-text">
                    <h5>{e.title}</h5>
                    <h6>{e.written_by.username}</h6>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return <div></div>;
  }
}

export default BlogGalleryCards;
