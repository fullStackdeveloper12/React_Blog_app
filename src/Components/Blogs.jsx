import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { getAuth } from 'firebase/auth';
import { db } from "../Firebase";
import { onSnapshot, collection, doc, deleteDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'; // Import Bounce from react-toastify

const Blogs = () => {
  const auth = getAuth();   
  const callRef = collection(db, "blog");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      onSnapshot(callRef, (snapShot) => {
        setData(snapShot.docs.map((doc) => ({
          ...doc.data(), id: doc.id
        })))
      })
    }
    getData();
  }, []);

  const deleteblog = async (id) => {
    const dataRef = doc(db, "blog", id);
    alert("Your Document Will be Deleted Permanently Forever");
    await deleteDoc(dataRef);
    toast.warn('Your Blog is Deleted!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }

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
        transition={Bounce}
      />
      <Navbar />
      {data.map((blog) => {
        return (
          <div className="blog-container" key={blog.id}>
            <div className="card">
            <img src={auth.currentUser.photoURL} alt={auth.currentUser.displayName} id="user_img"/>
            <p id="para">{auth.currentUser.displayName}</p>
              <div className="img-card">
                <img src={blog.url} alt={blog.title} />
              </div>
              <div className="content-card">
                <h1>{blog.title}</h1>
                <h2>{blog.description}</h2>
                <p>{blog.blog}</p>
                <Link to={`/Blogs/${blog.id}`} className='cta-btn'>View-Blog</Link>
                <button className="cta-btn-alt" onClick={() => deleteblog(blog.id)}>Delete</button>
              </div>
            </div>
          </div>
        )
      })}
      <Footer/>
    </>
  )
}

export default Blogs;
