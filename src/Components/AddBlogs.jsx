import React, { useState } from 'react';
import Navbar from './Navbar';
import { db } from "../Firebase";
import { addDoc, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'; // Import Bounce from react-toastify

const AddBlogs = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
    blog: "",
    autherName: auth.currentUser.displayName,
    authorImg: auth.currentUser.photoURL,
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formRef = collection(db, "blog");

  const submitHandler = async (e) => {
    e.preventDefault();
    await addDoc(formRef, formData);
    setFormData({
      title: "",
      description: "",
      url: "",
      blog: "",
    });
    toast.success('Data Submitted Successfully', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce, // Use Bounce here
    });
    setTimeout(() => {
      navigate("/Blogs");
    }, 2500);
    console.log("Data Submitted");
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce} // Use Bounce here
      />
      <Navbar />
      <div className="form-container">
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Title</label>
            </div>
            <div className="col-75">
              <input type="text" id="fname" name="title" onChange={changeHandler} value={formData.title} placeholder="Title.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Short-Descirption</label>
            </div>
            <div className="col-75">
              <input type="text" id="lname" name="description" onChange={changeHandler} value={formData.description} placeholder="Short-Description.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Image-URL</label>
            </div>
            <div className="col-75">
              <input type="text" id="lname" name="url" onChange={changeHandler} value={formData.url} placeholder="Image-URL.." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">Blog</label>
            </div>
            <div className="col-75">
              <textarea id="subject" name="blog" onChange={changeHandler} value={formData.blog} placeholder="Write something.." style={{ height: '200px' }}></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" className="btn" value="Add Blog" />
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default AddBlogs;
