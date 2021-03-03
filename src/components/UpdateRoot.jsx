import React, { useState } from "react";
import UpdateRootForm from "./UpdateRootForm";

function UpdateRoot({ id }) {
  const [updateRoot, setUpdatedRoot] = useState(false);

  function handleUpdate() {
    setUpdatedRoot(true);
  }

  if (updateRoot === false) {
    return <button onClick={handleUpdate}>update</button>;
  } else {
    return <UpdateRootForm setUpdatedRoot={setUpdatedRoot} id={id} />;
  }
}

export default UpdateRoot;
