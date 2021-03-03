import React, { useEffect, useState } from "react";
import { Route, Router, Link } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import RootGallery from "./components/RootGallery";
import AddBlog from "./components/AddBlog.jsx";
import AddRoot from "./components/AddRoot.jsx";
import Root from "./components/Root";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/">
        <Searchbar />
        <RootGallery />
      </Route>
      <Route path="/root/:id" component={Root} />
      <Route path="/root/blog/:id" component={Blog} />
      <Route path="/addblog" component={AddBlog} />
      <Route path="/addroot" component={AddRoot} />

      <Footer />
    </>
  );
}

export default App;
