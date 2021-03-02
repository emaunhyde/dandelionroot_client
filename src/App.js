import React, { useEffect, useState } from "react";
import { Route, Router, Link } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import RootGallery from "./components/RootGallery";
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
      <Route path="/blog/:id" component={Blog} />

      <Footer />
    </>
  );
}

export default App;
