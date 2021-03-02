import React, { useState, useEffect } from "react";
import axios from "axios";
import RootGalleryCards from "./RootGalleryCards";
import { Route, Router, Link } from "react-router-dom";

function RootGallery() {
  const [roots, setRoots] = useState("");
  const [grabComplete, setGrabComplete] = useState(false);
  const url = "http://ancient-reef-46417.herokuapp.com/roots/";

  // api searcher function
  async function getResults() {
    const result = await axios.get(`${url}`);
    setGrabComplete(true);
    return result;
  }

  useEffect(() => {
    getResults()
      .then((result) => {
        console.log(result.data);
        setRoots(result.data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (grabComplete === true) {
    return (
      <div className="gallery">
        <RootGalleryCards roots={roots} />
      </div>
    );
  }

  return <></>;
}

export default RootGallery;
