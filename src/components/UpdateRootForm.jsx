import React, { useState } from "react";
import axios from "axios";

function UpdateRootForm({ setUpdatedRoot, id }) {
  const url = "https://ancient-reef-46417.herokuapp.com/roots";

  const [formState, setFormState] = useState(null);

  function updateRoot() {
    axios.put(`${url}/${id}`, formState).catch((err) => console.log(err));
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateRoot(formState);
    setUpdatedRoot(false);
  }

  function handleChange(event) {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" onChange={handleChange} />

      <label htmlFor="scientific_name">Scientific Name:</label>
      <input type="text" id="scientific_name" onChange={handleChange} />

      <label htmlFor="description">Description:</label>
      <input type="text" id="description" onChange={handleChange} />

      <label htmlFor="key_benefits">Key Benefits:</label>
      <textarea id="key_benefits" cols="30" rows="10" onChange={handleChange} />

      <label htmlFor="usage">Usage:</label>
      <input type="text" id="usage" onChange={handleChange} />

      <label htmlFor="taste">Taste:</label>
      <input type="text" id="taste" onChange={handleChange} />

      <label htmlFor="caution">Caution:</label>
      <input type="text" id="caution" onChange={handleChange} />

      <label htmlFor="photo_url">Photo:</label>
      <input type="text" id="photo_url" onChange={handleChange} />

      <button type="submit">update</button>
    </form>
  );
}

export default UpdateRootForm;
