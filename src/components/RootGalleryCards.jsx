import React from "react";

function RootGalleryCards({ roots }) {
  if (roots.length > 0) {
    return (
      <>
        {roots.map((e) => {
          return (
            <>
              <a href={`root/${e.id}`}>
                <li
                  key={e.id}
                  style={{ backgroundImage: `url(${e.photo_url})` }}
                >
                  <h3>{e.name}</h3>
                  <h6>{e.scientific_name}</h6>
                </li>
              </a>
            </>
          );
        })}
      </>
    );
  }

  return <div></div>;
}

export default RootGalleryCards;
