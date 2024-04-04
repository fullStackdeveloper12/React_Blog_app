import React from "react";
import { auth } from "../Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const googleClick = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/Blogs");
  };

  return (
    <>
      <div className="container">
        <h1>LET'S CREATE</h1>
        <div className="img-container">
          <img
            onClick={googleClick}
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            style={{ width: "10%" }}
            alt="Google-login"
          />
          <span onClick={googleClick}>Sign In With Google</span>
        </div>
      </div>
    </>
  );
};

export default Login;
