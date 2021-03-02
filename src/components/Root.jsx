import React, { useState, useEffect } from "react";
import axios from "axios";

function Root({ match }) {
  const [root, setRoot] = useState("");
  const [showRoot, setShowRoot] = useState(false);
  const url = "http://ancient-reef-46417.herokuapp.com/roots";

  // GET specific project from api

  async function getRoot(match) {
    const result = await axios.get(`${url}/${match.params.id}`);
    setRoot(result.data);
    setShowRoot(true);
    console.log(result.data);
  }

  // on page load grab the specific project
  useEffect(() => {
    getRoot(match);
  }, []);

  if (showRoot === true) {
    return (
      <>
        <img src={root.photo_url} alt="root" />
        <h1>{root.name}</h1>
        <h3>{root.scientific_name}</h3>
        <p>{root.key_benefits}</p>
        <p>{root.description}</p>
        <p>{root.usage}</p>
        <p>{root.taste}</p>
        <p>{root.caution}</p>
        <div className="blog-gallery">
          {root.blogs.map((e) => {
            return (
              <a href={`blog/${e.id}`}>
                <li
                  key={e.id}
                  style={{ backgroundImage: `url(${e.photo_url})` }}
                >
                  <h5>{e.title}</h5>
                  <h5>{e.written_by.username}</h5>
                </li>
              </a>
            );
          })}
        </div>
      </>
    );
  }
  return <div></div>;
}

export default Root;
