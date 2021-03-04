import React from "react";

function RootGalleryCards({ roots }) {
  if (roots.length > 0) {
    return (
      <div className="gallery">
        {roots.map((e) => {
          return (
            <div className="gallery-card">
              <a href={`root/${e.id}`}>
                <img src={e.photo_url} alt="root" />
                <div className="gallery-card-text">
                  <h3>{e.name}</h3>
                  <h6>{e.scientific_name}</h6>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default RootGalleryCards;
