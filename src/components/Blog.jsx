import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteComment from "./DeleteComment";

function Blog({ match }) {
  const [blog, setBlog] = useState(null);
  const [showBlog, setShowBlog] = useState(false);
  const url = "https://ancient-reef-46417.herokuapp.com/blogs";

  async function getBlog(match) {
    const result = await axios.get(`${url}/${match.params.id}`);
    setBlog(result.data);
    setShowBlog(true);
    console.log(result.data);
  }

  // on page load grab the specific project
  useEffect(() => {
    getBlog(match);
  }, []);
  if (showBlog === true) {
    return (
      <>
        <div className="blog-page">
          <h1>{blog.title}</h1>
          <h3>{blog.byline}</h3>
          <h5>written by {blog.written_by.username}</h5>
          <div className="blog-photo">
            <img src={blog.photo_url} alt="blog post" />
          </div>
          <p>{blog.body}</p>
          <div className="commentsection">
            {blog.comments.map((e) => {
              return (
                <div className="comment-list">
                  <div className="comments">
                    <p>{e.body}</p>
                    <h4>Written by : {e.author}</h4>
                    <h6>Created at : {e.created_at}</h6>
                  </div>
                  <DeleteComment id={e.id} />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  // update blog button / form
  // delete blog button

  return <div></div>;
}

export default Blog;
