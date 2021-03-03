import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <img src={blog.photo_url} alt="blog post" />
        <h4>{blog.title}</h4>
        <h5>written by {blog.written_by.username}</h5>
        <h7>{blog.byline}</h7>
        <p>{blog.body}</p>
        <div className="commentsection">
          {blog.comments.map((e) => {
            return (
              <li key={e.id}>
                <h4>{e.author}</h4>
                <p>{e.body}</p>
                <p>Created at : {e.created_at}</p>
              </li>
            );
          })}
        </div>
      </>
    );
  }

  // update blog button / form
  // delete blog button

  return <div></div>;
}

export default Blog;
