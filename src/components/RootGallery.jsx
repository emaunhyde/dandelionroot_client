import React, { useState, useEffect } from "react";
import axios from "axios";
import RootGalleryCards from "./RootGalleryCards";

function RootGallery() {
  const [roots, setRoots] = useState("");
  const [grabComplete, setGrabComplete] = useState(false);
  const url = "https://ancient-reef-46417.herokuapp.com/roots/";

  // api searcher function
  async function getResults() {
    const result = await axios.get(`${url}`);
    setGrabComplete(true);
    return result;
  }

  useEffect(() => {
    getResults()
      .then((result) => {
        setRoots(result.data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (grabComplete === true) {
    return <RootGalleryCards roots={roots} />;
  } else {
    return <></>;
  }
}

export default RootGallery;
