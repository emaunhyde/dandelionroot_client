import React from "react";
import axios from "axios";

function DeleteRoot({ id }) {
  const url = "https://ancient-reef-46417.herokuapp.com/roots";

  function deleteRoot() {
    axios.delete(`${url}/${id}`);
  }
  return <button onClick={deleteRoot}>delete root</button>;
}

export default DeleteRoot;
