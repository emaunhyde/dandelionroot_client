import React from "react";
import axios from "axios";

function DeleteComment({ id }) {
  const url = "http://ancient-reef-46417.herokuapp.com/comments";

  function deleteComment() {
    axios.delete(`${url}/${id}`);
  }
  return <button onClick={deleteComment}>x</button>;
}

export default DeleteComment;
