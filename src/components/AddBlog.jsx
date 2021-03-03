import React, { useState } from "react";
import axios from "axios";

function AddBlog() {
  // fetch api post link and set state

  // const url = "https://ancient-reef-46417.herokuapp.com/blogs/";
  const url = "http://localhost:8000/blogs/";

  const [formState, setFormState] = useState(null);

  function createBlog() {
    axios.post(`${url}`, formState).catch((err) => console.log(err));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
    createBlog(formState);
  }

  function handleChange(event) {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  }

  return (
    <form onSubmit={handleSubmit} method="POST">
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" onChange={handleChange} />

      <label htmlFor="byline">Byline:</label>
      <input type="text" id="byline" onChange={handleChange} />

      <label htmlFor="title">Photo:</label>
      <input type="text" id="photo_url" onChange={handleChange} />

      <label htmlFor="body">Body:</label>
      <textarea id="body" cols="30" rows="10" onChange={handleChange} />

      <label htmlFor="id_ingredient">Ingredient:</label>
      <select name="ingredient" id="id_ingredient" onChange={handleChange}>
        <option value="1">Elderberry</option>
        <option value="2">Burdock Root</option>
        <option value="3">Papaya (leaf)</option>
        <option value="4">Cascara Sagrada</option>
        <option value="5">Irish Sea Moss</option>
      </select>

      <label htmlFor="id_written_by">Written by:</label>
      <select name="id_written_by" id="id_written_by">
        <option value="" selected>
          ---------
        </option>
        <option value="1">maungoose</option>
        <option value="2">jekyll</option>
      </select>

      <button type="submit">create</button>
    </form>
  );
}

export default AddBlog;
