import React from "react";
import Login from "./Components/Login";
import AddBlogs from "./Components/AddBlogs";
import Blogs from "./Components/Blogs";
import SingleBlog from "./Components/SingleBlog";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Blogs/:id" element={<SingleBlog />} />
          <Route path="/AddBlogs" element={<AddBlogs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
