import React from "react";
import axios from "axios";

function DeleteRoot({ id }) {
  const url = "http://ancient-reef-46417.herokuapp.com/roots";

  function deleteRoot() {
    axios.delete(`${url}/${id}`);
  }
  return (
    <div>
      <button onClick={deleteRoot}>delete</button>
    </div>
  );
}

export default DeleteRoot;
