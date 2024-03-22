import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate,Link,useLocation } from 'react-router-dom';



const Navbar = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const location=useLocation();
  
  // console.log(useLocation());

  const logout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (

    <>
    <div className="topnav">
  <a href="#home"><img
          src={auth?.currentUser?.photoURL}
          className='cta-img'
          alt={auth?.currentUser?.displayName}
        /></a>
  <p>{auth?.currentUser?.displayName}</p>
  <p>  {location.pathname==="/Blogs"?<Link to="/AddBlogs"  className="blog-btn">Blog+</Link>:<Link to="/Blogs"  className="blog-btn">Back</Link>}</p>
  <p><button onClick={logout} className="logout-btn">
              Logout
            </button></p>
</div>






















    {/* <header>
      <nav className="nav-bar">
        <img
          src={auth?.currentUser?.photoURL}
          className="nav-branding"
          alt={auth?.currentUser?.displayName}
        />
        <h2>{auth?.currentUser?.displayName}</h2>
        <ul className="nav-menu">
          <li className="nav-item">{auth?.currentUser?.email}</li>
          <li className="nav-item">
        {location.pathname==="/Blogs"?<Link to="/AddBlogs"  className="nav-links">Add Blog+</Link>:<Link to="/Blogs"  className="nav-links">Back-To-Blogs</Link>}
          </li>
          <li className="nav-item">
            <button onClick={logout} className="nav-link">
              Logout
            </button>
          </li>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header> */}
    </>
  );
};

export default Navbar;
