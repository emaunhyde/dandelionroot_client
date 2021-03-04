import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteRoot from "./DeleteRoot";
import UpdateRoot from "./UpdateRoot";

function Root({ match }) {
  const [root, setRoot] = useState("");
  const [showRoot, setShowRoot] = useState(false);
  const url = "https://ancient-reef-46417.herokuapp.com/roots";

  // GET specific project from api

  async function getRoot(match) {
    const result = await axios.get(`${url}/${match.params.id}`);
    setRoot(result.data);
    setShowRoot(true);
  }

  // on page load grab the specific project
  useEffect(() => {
    getRoot(match);
  }, []);

  if (showRoot === true) {
    return (
      <>
        <div className="root-page">
          <h1>{root.name}</h1>
          <h3>{root.scientific_name}</h3>
          <div className="root-photo">
            <img src={root.photo_url} alt="root" />
          </div>
          <div className="titles">
            <h5>Key Benefits</h5>
            <h5>Description</h5>
            <h5>Usage</h5>
            <h5>Taste</h5>
            <h5>Caution</h5>
          </div>
          <div className="info">
            <p>{root.key_benefits}</p>
            <p>{root.description}</p>
            <p>{root.usage}</p>
            <p>{root.taste}</p>
            <p>{root.caution}</p>
          </div>
          <div className="buttons">
            <a href={`/addblog`}>
              <button>add a blog</button>
            </a>
            <UpdateRoot id={root.id} />
            <DeleteRoot id={root.id} />
          </div>
          <div className="blog-gallery">
            {root.blogs.map((e) => {
              return (
                <div className="gallery-card">
                  <a href={`blog/${e.id}`}>
                    <img src={e.photo_url} alt="root" />
                    <h5>{e.title}</h5>
                    <h6>written by: {e.written_by.username}</h6>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  return <div></div>;
}

export default Root;
