import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { db } from "../Firebase";
import Navbar from "./Navbar";
import Footer from './Footer';
import { getDoc, doc } from "firebase/firestore";

const SingleBlog = () => {

  const [singleblog, setSingleBlog] = useState({});
  const { id } = useParams();
  const singleDataRef = doc(db, "blog", id);

  useEffect(() => {
    const singleFetch = async () => {
      try {
        const docSnapshot = await getDoc(singleDataRef);
        if (docSnapshot.exists()) {
          setSingleBlog(docSnapshot.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log("Error fetching document:", error);
      }
    };
    singleFetch();
  }, [singleDataRef]); 

  return (
    <>
        <Navbar/>
        <div className="main">       
        <div className="single">
          <div className="single-img">
            <img src={singleblog.url} alt="" />
          </div>
          <div className="single-content">
            <h2>{singleblog.title}</h2>
            <h3>{singleblog.description}</h3>
            <p>{singleblog.blog}</p>
          </div>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default SingleBlog;
