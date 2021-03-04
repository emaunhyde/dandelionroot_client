import React, { useState, useEffect } from "react";
import axios from "axios";
//
//
//
import BlogGalleryCards from "./BlogGalleryCards";
//
//
//
function BlogGallery() {
  const [blogs, setBlogs] = useState("");
  const [grabComplete, setGrabComplete] = useState(false);
  const url = "http://ancient-reef-46417.herokuapp.com/blogs/";

  // api searcher function
  async function getResults() {
    const result = await axios.get(`${url}`);
    setGrabComplete(true);
    console.log(result);
    return result;
  }

  useEffect(() => {
    getResults()
      .then((result) => {
        setBlogs(result.data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (grabComplete === true) {
    return <BlogGalleryCards blogs={blogs} />;
  } else {
    return <></>;
  }
}

export default BlogGallery;
